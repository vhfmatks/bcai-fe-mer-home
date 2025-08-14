import type { FC } from "react";
import { Container } from "../ui/Container";
import IconPillButton from "../ui/IconPillButton";
import { GuideCard } from "../ui/GuideCard";
import { LinkCopyBar } from "../ui/LinkCopyBar";
import { LinerIcon, PerplexityIcon, ChatGPTIcon, PinIcon, FoodIcon } from "../icons";

export const GuidPanel: FC = () => {
  return (

    <div className="space-y-6 py-[40px]">
      <div className="md:col-span-3">
        <LinkCopyBar urlText="web.paybooc.ai/mer/search" quoteText="잇플 링크 하나면 어디서든 쉽게 맛집 정보를 검색할 수 있어요" />
      </div>

      <Container className="grid grid-cols-1 py-6 gap-6 md:grid-cols-3 justify-items-center">
        <GuideCard
          className="h-full"
          icon={<FoodIcon className="h-12 w-12" />}
          iconContainerClassName="bg-[#FFF1CC]"
          title="AI 앱에서 바로 맛집 검색하기"
          description={
            "지금 퍼플렉시티, 챗GPT와 같은 AI 앱에 아래와 같이 프롬프트를 입력하고, 잇플의 추천 검색결과를 바로 확인해 보세요!"
          }
          promptPrefix="web.paybooc.ai/mer/search"
          promptExample={"에서 $을지로 4가 근처 매운 냉면 집$을 검색해서 추천해줘"}
        />  

        <GuideCard
          className="h-full"
          icon={<PinIcon className="h-12 w-12" />}
          iconContainerClassName="bg-[#E8F0FF]"
          title="나만의 맛집 찾기 AI 앱 만들기"
          description={
            "GPTs(챗GPT 도구모음)나 퍼플렉시티 템플릿에 잇플 링크를 넣고, 내 취향에 딱 맞는 맛집 찾기 앱을 직접 만들어 보세요!"
          }
        />

        <GuideCard
          className="h-full"
          icon={<LinerIcon className="h-12 w-12" background="#E9F6C8" color="#14371B" />}
          iconContainerClassName="bg-[#E6F4D7]" 
          title="LINER에서도 잇플맛집 검색 가능!"
          description={
            "Liner 라이너 앱 검색창 하단의 ‘맛집 검색’ 메뉴를 눌러 잇플의 맛집 리스트를 바로 확인할 수 있어요."
          }
          keywords={["강남역 돈까스", "망원동 카페"]}
        />
        
      </Container>
            {/* 아이콘 필 버튼 그룹 */}
      <Container className="flex justify-center">
        <div className="flex flex-nowrap gap-3 overflow-x-auto w-full justify-center">
          <IconPillButton
            label="퍼블렉시티"
            href="https://www.perplexity.ai/"
            className="w-[111px]"
            icon={<PerplexityIcon className="h-4 w-4" />}
          />
          <IconPillButton
            label="ChatGPT"
            href="https://chat.openai.com/"
            className="w-[111px]"
            icon={<ChatGPTIcon className="h-4 w-4" />}
          />  
          <IconPillButton
            label="LINER"
            href="https://getliner.com/"
            icon={<LinerIcon className="h-8 w-8" />}
            className="text-[14px] w-[111px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default GuidPanel;


