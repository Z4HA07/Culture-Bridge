import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  MessageSquare,
  PartyPopper,
  Utensils,
  X,
} from "lucide-react";
import { UI_COPY, WEBZINE_ARTICLES } from "../data/cultureData";
import { LanguageCode, WebzineArticle } from "../types/culture";

interface WebzineViewProps {
  lang: LanguageCode;
  readArticleIds: string[];
  onCompleteArticle: (articleId: string, title: string) => void;
}

export function WebzineView({
  lang,
  readArticleIds,
  onCompleteArticle,
}: WebzineViewProps) {
  const [selectedArticle, setSelectedArticle] = useState<WebzineArticle | null>(null);
  const copy = UI_COPY[lang].webzine;

  const renderIcon = (icon: WebzineArticle["icon"]) => {
    if (icon === "forum") return <MessageSquare className="w-4 h-4 text-light-primary shrink-0" aria-hidden="true" />;
    if (icon === "restaurant") return <Utensils className="w-4 h-4 text-light-primary shrink-0" aria-hidden="true" />;
    return <PartyPopper className="w-4 h-4 text-light-primary shrink-0" aria-hidden="true" />;
  };

  return (
    <main className="flex-1 p-page-margin max-w-6xl w-full mx-auto flex flex-col gap-gutter-lg">
      <div className="flex items-center gap-gutter-sm">
        <BookOpen className="w-7 h-7 text-light-primary shrink-0" aria-hidden="true" />
        <div>
          <h1 className="font-headline text-headline-md lg:text-headline-lg text-light-on-surface">
            {copy.title}
          </h1>
          <p className="font-body text-body-md text-light-on-surface-variant text-balance">
            {copy.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg items-stretch">
        {WEBZINE_ARTICLES.map((article) => {
          const isRead = readArticleIds.includes(article.id);
          return (
            <button
              key={article.id}
              type="button"
              onClick={() => setSelectedArticle(article)}
              className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-gutter-lg flex flex-col justify-between gap-gutter-md hover:border-light-primary transition-colors duration-150 ease-out h-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
            >
              <div className="flex flex-col gap-gutter-sm">
                <div className="flex items-center justify-between gap-gutter-sm">
                  <span className="font-label text-label-md text-light-primary">
                    {article.category[lang]} · {article.readTime[lang]}
                  </span>
                  {renderIcon(article.icon)}
                </div>
                <h2 className="font-title text-title-md text-light-on-surface">
                  {article.title[lang]}
                </h2>
                <p className="font-body text-body-md text-light-on-surface-variant text-balance">
                  {article.summary[lang]}
                </p>
              </div>

              <div className="flex items-center justify-between gap-gutter-sm w-full">
                <span className="font-label text-label-lg text-light-primary">
                  {copy.readMore}
                </span>
                {isRead && (
                  <span className="inline-flex items-center gap-gutter-xs font-label text-label-md text-light-primary">
                    <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{copy.completedBadge}</span>
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-gutter-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="webzine-modal-title"
        >
          <article className="w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-gutter-lg lg:p-gutter-xl flex flex-col gap-gutter-lg shadow-lg">
            <header className="flex items-start justify-between gap-gutter-md border-b border-light-outline-variant pb-gutter-md">
              <div className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-md text-light-primary">
                  {selectedArticle.category[lang]} · {selectedArticle.readTime[lang]}
                </span>
                <h2
                  id="webzine-modal-title"
                  className="font-headline text-headline-md text-light-on-surface"
                >
                  {selectedArticle.title[lang]}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label={copy.closeBtn}
                className="w-9 h-9 rounded-full inline-flex items-center justify-center text-light-on-surface-variant hover:bg-light-surface-container-low shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </header>

            <div className="flex flex-col gap-gutter-md">
              {selectedArticle.paragraphs[lang].map((p, idx) => (
                <p
                  key={idx}
                  className="font-body text-body-lg text-light-on-surface text-pretty"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="bg-light-secondary-container text-light-on-secondary-container rounded-md p-gutter-md flex flex-col gap-gutter-xs">
              <span className="font-title text-title-md">{copy.tipHeading}</span>
              <p className="font-body text-body-md text-pretty">
                {selectedArticle.culturalTip[lang]}
              </p>
            </div>

            <footer className="flex flex-wrap items-center justify-end gap-gutter-sm pt-gutter-sm border-t border-light-outline-variant">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-gutter-md py-gutter-sm rounded-sm border border-light-outline-variant bg-light-surface-container-lowest text-light-on-surface-variant font-label text-label-lg hover:bg-light-surface-container-low"
              >
                {copy.closeBtn}
              </button>

              {readArticleIds.includes(selectedArticle.id) ? (
                <span className="inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-sm bg-light-secondary-container text-light-on-secondary-container font-label text-label-lg">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{copy.completedBadge}</span>
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    onCompleteArticle(selectedArticle.id, selectedArticle.title[lang]);
                  }}
                  className="px-gutter-lg py-gutter-sm rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container"
                >
                  {copy.completeBtn}
                </button>
              )}
            </footer>
          </article>
        </div>
      )}
    </main>
  );
}
