export const dynamic = "force-dynamic";

type RouteSearchParams = Record<string, string | string[] | undefined>;

function toStringValue(value: string | string[] | undefined): string | undefined {
  if (value === undefined) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

function generateTrnsTrceNo(instNm: string): string {
  const now = new Date();
  const yyyy = now.getFullYear().toString();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const yyyymmdd = `${yyyy}${mm}${dd}`;
  const seq = Math.floor(Math.random() * 1_000_000_0000)
    .toString()
    .padStart(10, "0");
  return `${instNm}${yyyymmdd}${seq}`;
}

import SearchResultPanel from "./_components/panel/SearchResultPanel";
import { notFound } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<RouteSearchParams>
}) {
  const params = await searchParams;

  const instNm = toStringValue(params.instNm) || "bccard";
  const trnsTrceNo =
    toStringValue(params.trnsTrceNo) || generateTrnsTrceNo(instNm);
  const merNm = toStringValue(params.merNm);
  const location = toStringValue(params.location);
  // 스펙 상 필드는 merTpBuzNm 이고, 예시 문서에는 merTpbuzNm 오탈자 존재 → 둘 다 허용
  const merTpBuzNm =
    toStringValue(params.merTpBuzNm) ||
    toStringValue(params.merTpbuzNm);

  const requestBody: Record<string, unknown> = {
    trnsTrceNo,
    instNm,
  };
  if (merNm !== undefined) requestBody.merNm = merNm;
  if (location !== undefined) requestBody.location = location;
  if (merTpBuzNm !== undefined) requestBody.merTpBuzNm = merTpBuzNm;

  let responseData: { data?: MerchantResponseItem[] } | null = null;
  let ok = false;
  const apiUrl = process.env.NEXT_PUBLIC_EATPL_SEARCH_API || "https://dev-api.paybooc.ai/api/mer/v1/search";
  try {
    const res = await fetch(  
      apiUrl,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
        cache: "no-store",
      }
    );
    ok = res.ok;
    try {
      responseData = await res.json();
    } catch {
      responseData = null;
    }
  } catch (_e) {
    responseData = null;
    
  }

  // API 응답 → 패널 아이템으로 매핑
  type MerchantResponseItem = {
    merNm?: string;
    merAddr?: string;
    merTpno?: string;
    merTpbuzNm?: string; // 스펙 기준 (response)
    merTpBuzNm?: string; // 호환 처리 (가능한 변형)
    allSaleRnk?: number;
    ccgSaleRnk?: number;
    loclPrsnPpltYn?: boolean;
    merUrl?: string;
    srtTime?: string; // 최초승인시간
    endTime?: string; // 최종승인시간
    frnrVsitYn?: boolean;
    empyVsitYn?: boolean;
    hldyDwk?: string[] | string[][]; // 예시 상 중첩 가능성 고려
    congestionDwk?: string;
    congestionTizn?: string; // "오전" 등
    vistCstmrRnkList?: { rk01?: string; rk02?: string; rk03?: string };
  };

  const flattenHolidays = (value: MerchantResponseItem["hldyDwk"]): string[] => {
    if (!Array.isArray(value)) return [];
    if (value.length > 0 && Array.isArray(value[0])) {
      return (value as string[][]).flat();
    }
    return value as string[];
  };

  const items = Array.isArray(responseData?.data)
    ? responseData!.data!.map((d) => ({
        merTpbuzNm: d.merTpbuzNm ?? d.merTpBuzNm ?? "",
        holidayText: (() => {
          const days = flattenHolidays(d.hldyDwk);
          return days.length > 0 ? `${days.join(" · ")} 휴무` : undefined;
        })(),
        timeText: d.srtTime && d.endTime ? `${d.srtTime?.slice(0,2)}:${d.srtTime?.slice(2)}~${d.endTime?.slice(0,2)}:${d.endTime?.slice(2)}` : undefined,
        name: d.merNm ?? "",
        address: d.merAddr ?? "",
        merUrl: d.merUrl ?? undefined,
        nationalBadgeLabel: "전국",
        nationalRankText: typeof d.allSaleRnk === "number" ? `상위 ${d.allSaleRnk}%` : undefined,
        localBadgeLabel: "지역",
        localRankText: typeof d.ccgSaleRnk === "number" ? `상위 ${d.ccgSaleRnk}%` : undefined,
        tags: [
          d.vistCstmrRnkList?.rk01?.replaceAll(" ", ""),
          d.empyVsitYn ? "회식" : undefined,
          d.frnrVsitYn ? "외국인" : undefined,
        ].filter(Boolean) as string[],
      }))
    : [];

  if (!ok || !Array.isArray(responseData?.data) || items.length === 0) {
    // 검색 결과가 없거나 응답 비정상일 때 not-found 라우트로
    notFound();
  }

  // 검색 파라미터 조합에 따른 서브타이틀 결정
  const hasMerNm = typeof merNm === "string" && merNm.trim().length > 0;
  const hasLocation = typeof location === "string" && location.trim().length > 0;
  const hasMerTpBuzNm = typeof merTpBuzNm === "string" && merTpBuzNm.trim().length > 0;

  const subtitleText = (() => {
    // 1,4,5,7: 가맹점명이 있는 모든 경우
    if (hasMerNm) return "가맹점명 유사도 순";
    // 2,6: 지역이 단독이거나 업종과 함께 있는 경우
    if (hasLocation) return "매출건수 시군구 랭킹 순";
    // 3: 업종만 있는 경우 (또는 기본값)
    if (hasMerTpBuzNm) return "매출건수 전국 랭킹 순";
    // 명시되지 않은 경우 기본값
    return "매출건수 전국 랭킹 순";
  })();

  return (
    <div style={{ padding: 16 }}>
      <SearchResultPanel
        title={`${items.length}개의 맛집`}
        subtitle={subtitleText}
        items={items}
      />
    </div>
  );
}


