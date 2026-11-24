import { useState } from "react";
import { ArrowRight, CheckCircle2, HelpCircle, RotateCcw, XCircle } from "lucide-react";
import { QUIZ_DATA, UI_COPY } from "../data/cultureData";
import { LanguageCode, MasteryKey } from "../types/culture";

interface QuizViewProps {
  lang: LanguageCode;
  quizAnswers: Record<number, "O" | "X">;
  quizStreak: number;
  onAnswerQuestion: (
    questionId: number,
    choice: "O" | "X",
    isCorrect: boolean,
    masteryKey: MasteryKey,
    questionTitle: string,
  ) => void;
  onResetQuiz: () => void;
}

export function QuizView({
  lang,
  quizAnswers,
  quizStreak,
  onAnswerQuestion,
  onResetQuiz,
}: QuizViewProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const copy = UI_COPY[lang].quiz;

  const currentQuestion = QUIZ_DATA[currentIdx];
  const userChoice = quizAnswers[currentQuestion.id];
  const hasAnswered = userChoice !== undefined;
  const isCorrect = hasAnswered && userChoice === currentQuestion.answer;

  const handleSelectAnswer = (choice: "O" | "X") => {
    const correct = choice === currentQuestion.answer;
    onAnswerQuestion(
      currentQuestion.id,
      choice,
      correct,
      currentQuestion.masteryKey,
      currentQuestion.category[lang],
    );
  };

  const handleReset = () => {
    onResetQuiz();
    setCurrentIdx(0);
  };

  return (
    <main className="flex-1 p-page-margin max-w-6xl w-full mx-auto flex flex-col gap-gutter-lg">
      <div className="flex items-center gap-gutter-sm">
        <HelpCircle className="w-7 h-7 text-light-primary shrink-0" aria-hidden="true" />
        <div>
          <h1 className="font-headline text-headline-md lg:text-headline-lg text-light-on-surface">
            {copy.title}
          </h1>
          <p className="font-body text-body-md text-light-on-surface-variant">
            {copy.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
        <article className="lg:col-span-8 bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-gutter-lg flex flex-col gap-gutter-lg">
          <header className="flex flex-wrap items-center justify-between gap-gutter-sm border-b border-light-outline-variant pb-gutter-md">
            <div className="flex items-center gap-gutter-sm">
              <span className="px-gutter-md py-gutter-xs rounded-full bg-light-secondary-container text-light-on-secondary-container font-label text-label-md">
                {currentQuestion.category[lang]}
              </span>
              <span className="font-body text-body-md text-light-on-surface-variant">
                {copy.rewardHint}
              </span>
            </div>

            <div className="flex items-center gap-gutter-md">
              <span className="font-label text-label-md text-light-primary tabular-nums">
                {quizStreak}
                {copy.streakUnit}
              </span>
              <span className="font-mono text-label-lg text-light-on-surface tabular-nums">
                Q{currentIdx + 1} / {QUIZ_DATA.length}
              </span>
            </div>
          </header>

          <div className="bg-light-surface-container-low rounded-md p-gutter-lg flex flex-col gap-gutter-sm">
            <span className="font-label text-label-md text-light-primary">
              {copy.questionLabel}
            </span>
            <h2 className="font-headline text-headline-md text-light-on-surface text-balance">
              {currentQuestion.question[lang]}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
            <button
              type="button"
              onClick={() => handleSelectAnswer("O")}
              className={`border rounded-md p-gutter-lg flex flex-col items-center gap-gutter-xs transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary ${
                userChoice === "O"
                  ? "bg-light-secondary-container border-light-primary"
                  : "bg-light-surface-container-lowest border-light-outline-variant hover:border-light-primary"
              }`}
            >
              <CheckCircle2 className="w-8 h-8 text-light-primary" aria-hidden="true" />
              <span className="font-title text-title-md text-light-on-surface">
                {copy.yesTitle}
              </span>
              <span className="font-body text-body-md text-light-on-surface-variant">
                {copy.yesDesc}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleSelectAnswer("X")}
              className={`border rounded-md p-gutter-lg flex flex-col items-center gap-gutter-xs transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary ${
                userChoice === "X"
                  ? "bg-light-error-container border-light-tertiary"
                  : "bg-light-surface-container-lowest border-light-outline-variant hover:border-light-tertiary"
              }`}
            >
              <XCircle className="w-8 h-8 text-light-tertiary" aria-hidden="true" />
              <span className="font-title text-title-md text-light-on-surface">
                {copy.noTitle}
              </span>
              <span className="font-body text-body-md text-light-on-surface-variant">
                {copy.noDesc}
              </span>
            </button>
          </div>

          {hasAnswered && (
            <div
              role="status"
              className={`rounded-md p-gutter-md flex flex-col gap-gutter-xs border ${
                isCorrect
                  ? "bg-light-secondary-container text-light-on-secondary-container border-light-primary/30"
                  : "bg-light-error-container text-light-on-error-container border-light-tertiary/30"
              }`}
            >
              <div className="flex items-center gap-gutter-xs">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                ) : (
                  <XCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                )}
                <span className="font-title text-title-md">
                  {isCorrect ? copy.correctTitle : copy.wrongTitle}
                </span>
              </div>
              <p className="font-body text-body-md text-pretty">
                {currentQuestion.explanation[lang]}
              </p>
            </div>
          )}

          <footer className="flex flex-wrap items-center justify-between gap-gutter-sm pt-gutter-sm border-t border-light-outline-variant">
            <span className="font-body text-body-md text-light-on-surface-variant">
              {copy.totalFooter}
            </span>

            <div className="flex items-center gap-gutter-md">
              <button
                type="button"
                onClick={handleReset}
                className="shrink-0 whitespace-nowrap inline-flex items-center gap-gutter-xs font-label text-label-lg text-light-primary hover:underline"
              >
                <RotateCcw className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{copy.resetBtn}</span>
              </button>

              {currentIdx < QUIZ_DATA.length - 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentIdx((prev) => prev + 1)}
                  className="shrink-0 whitespace-nowrap inline-flex items-center gap-gutter-xs px-gutter-md py-gutter-sm rounded-sm bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-150 ease-out"
                >
                  <span>{copy.nextBtn}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>
              )}
            </div>
          </footer>
        </article>

        <aside className="lg:col-span-4 flex flex-col gap-gutter-md">
          <article className="bg-light-surface-container-lowest border border-light-outline-variant rounded-md p-gutter-lg flex flex-col gap-gutter-md">
            <div className="flex items-center justify-between gap-gutter-sm">
              <h3 className="font-title text-title-md text-light-on-surface">
                {copy.navTitle}
              </h3>
              <span className="font-label text-label-md text-light-on-surface-variant tabular-nums">
                {copy.navCount}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-gutter-sm">
              {QUIZ_DATA.map((q, idx) => {
                const answeredChoice = quizAnswers[q.id];
                const active = idx === currentIdx;
                const answeredRight = answeredChoice === q.answer;
                const answeredWrong =
                  answeredChoice !== undefined && answeredChoice !== q.answer;

                let btnStyle =
                  "bg-light-surface-container-low text-light-on-surface border border-light-outline-variant hover:border-light-primary";
                if (active) {
                  btnStyle = "bg-light-primary text-light-on-primary border border-light-primary";
                } else if (answeredRight) {
                  btnStyle =
                    "bg-light-secondary-container text-light-on-secondary-container border border-light-primary/40";
                } else if (answeredWrong) {
                  btnStyle =
                    "bg-light-error-container text-light-on-error-container border border-light-tertiary/40";
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIdx(idx)}
                    className={`py-gutter-sm rounded-sm font-mono text-label-lg tabular-nums transition-colors duration-150 ease-out ${btnStyle}`}
                  >
                    Q{idx + 1}
                  </button>
                );
              })}
            </div>
          </article>

          <article className="bg-light-surface-container-low border border-light-outline-variant rounded-md p-gutter-lg flex flex-col gap-gutter-sm">
            <h3 className="font-title text-title-md text-light-on-surface">
              {copy.xpGuideTitle}
            </h3>
            <ul className="flex flex-col gap-gutter-xs font-body text-body-md text-light-on-surface-variant">
              <li className="flex items-center gap-gutter-xs">
                <CheckCircle2 className="w-4 h-4 text-light-primary shrink-0" aria-hidden="true" />
                <span>{copy.xpGuide1}</span>
              </li>
              <li className="flex items-center gap-gutter-xs">
                <CheckCircle2 className="w-4 h-4 text-light-primary shrink-0" aria-hidden="true" />
                <span>{copy.xpGuide2}</span>
              </li>
            </ul>
          </article>
        </aside>
      </div>
    </main>
  );
}
