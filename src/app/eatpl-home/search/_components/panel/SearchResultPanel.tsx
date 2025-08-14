"use client";

import type { FC } from "react";
import MerchantCard, { type MerchantCardProps } from "../MerchantCard";

export type SearchResultPanelProps = {
  title?: string;
  subtitle?: string;
  items: Array<MerchantCardProps>;
};

const SearchResultPanel: FC<SearchResultPanelProps> = ({
  title = "검색 결과",
  subtitle,
  items,
}) => {

  return (
    <section className="px-2 md:px-0 max-w-[800px] mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[14px] font-semibold text-[#6B7280]">{title}</h2>
        {subtitle ? (
          <div className="text-[12px] text-[#9CA3AF]">{subtitle}</div>
        ) : null}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, idx) => (
          <MerchantCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SearchResultPanel;



