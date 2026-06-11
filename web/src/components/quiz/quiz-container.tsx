"use client";

import { useQuiz } from "@/hooks/use-quiz";
import { QUIZ_QUESTIONS } from "@/lib/quiz-data";
import QuizQuestion from "./quiz-question";
import QuizResult from "./quiz-result";

export default function QuizContainer() {
  const { answers, selectAnswer, reset, allAnswered, totalScore, band } = useQuiz();

  return (
    <section id="quiz" className="bg-ocx-bg-subtle py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="font-display text-xs uppercase tracking-ocx-caps font-bold text-ocx-fg-muted mb-4">
            Free &middot; two minutes &middot; no sign-up
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-ocx-3xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-4">
            Where are you on the journey to AI with people in control?
          </h2>
          <p className="font-body text-base md:text-lg text-ocx-fg mb-8">
            Answer four quick questions for an instant read of your maturity and the right first
            step. Nothing leaves your browser.
          </p>

          {/* No-JS fallback */}
          <noscript>
            <p className="font-body text-sm text-ocx-fg-muted bg-ocx-bg border border-ocx-border rounded-ocx-md p-4">
              Please enable JavaScript to take the self-assessment.
            </p>
          </noscript>

          <div className="bg-ocx-bg rounded-ocx-lg border border-ocx-border shadow-ocx-sm p-4 md:p-8">
            {QUIZ_QUESTIONS.map((q, idx) => (
              <QuizQuestion
                key={idx}
                question={q}
                questionIndex={idx}
                selectedIndex={answers[idx]}
                onSelect={selectAnswer}
              />
            ))}

            {allAnswered && band && (
              <QuizResult band={band} score={totalScore} maxScore={16} onReset={reset} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
