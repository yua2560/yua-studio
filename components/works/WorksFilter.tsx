"use client";

import { useMemo, useState } from "react";
import { WorkCategory, works, workCategories } from "@/data/works";
import WorkCard from "./WorkCard";

const ALL = "すべて";

export default function WorksFilter() {
  const [active, setActive] = useState<WorkCategory | typeof ALL>(ALL);

  const filtered = useMemo(
    () => (active === ALL ? works : works.filter((w) => w.category === active)),
    [active]
  );

  const tabs: (WorkCategory | typeof ALL)[] = [ALL, ...workCategories];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              active === tab
                ? "bg-brand-navy-700 text-white"
                : "bg-white text-brand-navy-700 border border-brand-blue-200 hover:bg-brand-blue-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-foreground/60">
          該当する作品がありません。
        </p>
      )}
    </div>
  );
}
