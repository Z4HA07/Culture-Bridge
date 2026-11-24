import { Award, BarChart3 } from "lucide-react";
import { UI_COPY } from "../data/cultureData";
import { LanguageCode, LearningRecord, MasteryKey } from "../types/culture";

interface AnalyticsViewProps {
  lang: LanguageCode;
  mastery: Record<MasteryKey, number>;
  records: LearningRecord[];
}

export function AnalyticsView({ lang, mastery, records }: AnalyticsViewProps) {
  const copy = UI_COPY[lang].analytics;
  const masteryKeys: MasteryKey[] = ["neighbor", "lifestyle", "public", "workplace"];

  return (
    <main className="flex-1 p-page-margin max-w-6xl w-full mx-auto flex flex-col gap-gutter-lg">
      <div className="flex items-center gap-gutter-sm">
        <BarChart3 className="w-7 h-7 text-light-primary shrink-0" aria-hidden="true" />
        <div>
          <h1 className="font-headline text-headline-md lg:text-headline-lg text-light-on-surface">
            {copy.title}
          </h1>
          <p className="font-body text-body-md text-light-on-surface-variant text-balance">
            {copy.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
        <article className="lg:col-span-5 bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-gutter-lg flex flex-col gap-gutter-md">
          <div className="flex items-center justify-between gap-gutter-sm">
            <h2 className="font-headline text-headline-md text-light-on-surface">
              {copy.masteryTitle}
            </h2>
            <span className="inline-flex items-center gap-gutter-xs px-gutter-sm py-gutter-xs rounded-full bg-light-secondary-container text-light-on-secondary-container font-label text-label-md">
              <Award className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{copy.tierBadge}</span>
            </span>
          </div>

          <div className="flex flex-col gap-gutter-md">
            {masteryKeys.map((key) => {
              const score = Math.min(100, mastery[key]);
              return (
                <div key={key} className="flex flex-col gap-gutter-xs">
                  <div className="flex items-center justify-between font-body text-body-md">
                    <span>{copy.masteryLabels[key]}</span>
                    <span className="font-mono text-label-lg text-light-primary tabular-nums">
                      {score}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-light-surface-container-high overflow-hidden">
                    <div
                      className="h-2 rounded-full bg-light-primary transition-[width] duration-200 ease-out"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        <article className="lg:col-span-7 bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-gutter-lg flex flex-col gap-gutter-md">
          <div className="flex items-center justify-between gap-gutter-sm">
            <h2 className="font-headline text-headline-md text-light-on-surface">
              {copy.historyTitle}
            </h2>
            <span className="font-label text-label-md text-light-on-surface-variant tabular-nums">
              {copy.recentCount} ({records.length})
            </span>
          </div>

          <div className="divide-y divide-light-outline-variant">
            {records.slice(0, 8).map((rec) => (
              <div
                key={rec.id}
                className="py-gutter-sm flex flex-wrap items-center justify-between gap-gutter-sm"
              >
                <div className="flex flex-col gap-gutter-xs min-w-0">
                  <span className="font-title text-title-md text-light-on-surface">
                    {rec.title}
                  </span>
                  <span className="font-body text-body-md text-light-on-surface-variant">
                    {rec.subtitle}
                  </span>
                </div>
                <div className="flex items-center gap-gutter-md shrink-0">
                  <span className="font-mono text-label-md text-light-on-surface-variant tabular-nums">
                    {rec.date}
                  </span>
                  <span className="px-gutter-sm py-gutter-xs rounded-full bg-light-secondary-container text-light-on-secondary-container font-mono text-label-md tabular-nums">
                    +{rec.xp} XP
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
