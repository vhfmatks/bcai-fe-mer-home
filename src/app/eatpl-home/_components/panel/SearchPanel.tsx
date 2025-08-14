"use client";

import type { FC } from "react";
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "../../../lib/cn";
import { PageTitle, TitleLabel, DescLabel } from "../ui/SectionTitle";
import { InputField } from "../ui/Input";
import { CategorySelector, type KeyValue } from "../ui/CategorySelector";
import { SearchIcon } from "../icons/SearchIcon";

const LARGE_CATEGORIES: KeyValue[] = [
  { key: "korean", value: "일반한식" },
  { key: "western", value: "서양음식" },
  { key: "snack", value: "스넥" },
  { key: "chinese", value: "중국음식" },
  { key: "japanese_sashimi", value: "일식회집" },
  { key: "pub", value: "주점" },
  { key: "cocktail_bar", value: "칵테일바" },
  { key: "galbi_specialty", value: "갈비전문점" },
  { key: "hanjeongsik", value: "한정식" },
];

const SMALL_CATEGORIES: KeyValue[] = [
  { key: "cafe", value: "카페" },
  { key: "bbq", value: "고기구이" },
  { key: "stew", value: "찜/탕/찌개" },
  { key: "chicken", value: "치킨" },
  { key: "noodle", value: "국수/면/만두" },
  { key: "seafood", value: "해산물구이/찜" },
  { key: "gimbap", value: "김밥전문점" },
  { key: "bunsik", value: "분식" },
  { key: "etc_foreign", value: "기타외국식" },
  { key: "gopchang", value: "곱창전골/구이" },
  { key: "pizza", value: "피자" },
  { key: "jokbal", value: "족발/보쌈" },
  { key: "burger", value: "버거" },
  { key: "sushi", value: "스시/초밥" },
  { key: "brunch", value: "브런치카페/샐러드" },
  { key: "tteokbokki", value: "떡볶이전문점" },
  { key: "bakery", value: "빵/도넛" },
  { key: "dosirak", value: "도시락/죽" },
  { key: "katsu", value: "일식돈가스" },
  { key: "buffet", value: "뷔페" },
  { key: "malatang", value: "마라탕" },
  { key: "italian", value: "이탈리아음식" },
  { key: "sandwich", value: "샌드위치/토스트" },
  { key: "yang_kkochi", value: "양꼬치" },
  { key: "asian", value: "아시안" },
  { key: "ice", value: "아이스크림/요거트/빙수" },
  { key: "jeon", value: "전/부침개" },
  { key: "etc_bakery", value: "기타베이커리" },
  { key: "ramen", value: "일식라멘" },
  { key: "mexican", value: "멕시칸" },
  { key: "tteok", value: "떡/한과" },
  { key: "french", value: "프랑스음식" },
  { key: "vegan", value: "비건/채식/사찰" },
  { key: "etc", value: "기타" },
];

export const SearchPanel: FC = () => {
  const router = useRouter();
  const [location, setLocation] = useState<string>("");
  const [merchantName, setMerchantName] = useState<string>("");
  const [largeKey, setLargeKey] = useState<string | null>(null);
  const [smallKey, setSmallKey] = useState<string | null>(null);

  const largeSelectedValue = useMemo(
    () => LARGE_CATEGORIES.find((c) => c.key === largeKey)?.value,
    [largeKey]
  );
  const smallSelectedValue = useMemo(
    () => SMALL_CATEGORIES.find((c) => c.key === smallKey)?.value,
    [smallKey]
  );

  const merTpBuzNm = smallSelectedValue || largeSelectedValue || "";

  const isDisabled = useMemo(() => {
    return !merchantName && !location && !merTpBuzNm;
  }, [merchantName, location, merTpBuzNm]);

  const handleSearch = useCallback(() => {
    if (isDisabled) return;
    const params = new URLSearchParams();
    if (merchantName) params.set("merNm", merchantName);
    if (location) params.set("location", location);
    if (merTpBuzNm) params.set("merTpBuzNm", merTpBuzNm);
    router.push(`/eatpl-home/search?${params.toString()}`);
  }, [isDisabled, merchantName, location, merTpBuzNm, router]);

  return (
    <div className="w-full space-y-6 py-[40px]">
      <PageTitle title="궁금한 맛집을 찾아보세요" />
      {/* 1. 지역 / 가맹점명 */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <InputField
          title="지역"
          placeholder="서울, 중구, 을지로 등"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <InputField
          title="가맹점명"
          placeholder="가맹점명을 입력해 주세요"
          value={merchantName}
          onChange={(e) => setMerchantName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />  
      </div>

      {/* 2. 업종선택 안내 */}
      <div className="space-y-3">
        <TitleLabel title="업종선택" />
        <DescLabel desc="대분류나 소분류 중 한개를 선택해 주세요" />
      </div>

      {/* 3. 대분류 */}
      <CategorySelector
        title="대분류"
        items={LARGE_CATEGORIES}
        defaultExpanded={false}
        value={largeKey ?? undefined}
        onChange={(key) => {
          setLargeKey(key);
          // 대분류 선택 시 소분류 초기화
          setSmallKey(null);
        }}
      />

      {/* 4. 소분류 */}
      <CategorySelector
        title="소분류"
        items={SMALL_CATEGORIES}
        defaultExpanded={false}
        value={smallKey ?? undefined}
        onChange={(key) => setSmallKey(key)}
      />

      {/* 5. 검색 버튼 */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleSearch}
          disabled={isDisabled}
          className={cn(
            "mx-auto flex h-14 w-full max-w-[520px] items-center justify-center gap-3 rounded-xl",
            isDisabled
              ? "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"
              : "bg-[#D7E3F5] text-[#334155] hover:brightness-95",
          )}
        >
          <SearchIcon />
          <span className="text-[16px] font-bold">맛집 찾기</span>
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;


