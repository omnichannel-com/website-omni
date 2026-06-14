"use client";

import { QuizQuestion as QuizQuestionType } from "@/lib/quiz-data";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionIndex: number;
  selectedIndex: number;
  onSelect: (questionIndex: number, optionIndex: number) => void;
}

export default function QuizQuestion({
  question,
  questionIndex,
  selectedIndex,
  onSelect,
}: QuizQuestionProps) {
  return (
    <div className="border-t border-ocx-border py-6">
      <p className="font-display font-bold text-base md:text-lg text-ocx-fg-primary mb-4">
        {questionIndex + 1}. {question.question}
      </p>
      <div className="flex flex-col gap-2">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            type="button"
            aria-pressed={selectedIndex === idx}
            onClick={() => onSelect(questionIndex, idx)}
            className={`text-left font-body text-sm md:text-base px-4 py-3 rounded-ocx-md border transition-all duration-ocx-fast cursor-pointer
              ${
                selectedIndex === idx
                  ? "border-ocx-dark-blue bg-ocx-dark-blue/[0.04] shadow-[inset_0_0_0_1px_#1b1464]"
                  : "border-ocx-border bg-ocx-bg hover:border-ocx-border-strong"
              }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
