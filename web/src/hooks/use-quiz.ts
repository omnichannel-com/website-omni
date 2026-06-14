"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { QUIZ_QUESTIONS } from "@/lib/quiz-data";
import { getBandForScore } from "@/lib/quiz-bands";
import { usePosthogConsent } from "./use-posthog";

const STORAGE_KEY = "ocx_quiz_answers";

export interface QuizState {
  answers: number[]; // selected option index per question, -1 = unanswered
  currentQuestion: number;
}

export function useQuiz() {
  const pathname = usePathname();
  const [answers, setAnswers] = useState<number[]>(
    Array(QUIZ_QUESTIONS.length).fill(-1)
  );
  const { capture } = usePosthogConsent();

  // Load from sessionStorage on mount
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length === QUIZ_QUESTIONS.length) {
          setAnswers(parsed);
        }
      }
    } catch {
      // ignore corrupt sessionStorage
    }
  }, []);

  // Persist to sessionStorage whenever answers change
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      // ignore storage errors
    }
  }, [answers]);

  const selectAnswer = useCallback(
    (questionIndex: number, optionIndex: number) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[questionIndex] = optionIndex;
        return next;
      });
      const score = QUIZ_QUESTIONS[questionIndex].options[optionIndex].score;
      capture({
        event: "quiz_answer",
        properties: { question_index: questionIndex, answer_index: optionIndex, score },
      });
    },
    [capture]
  );

  const reset = useCallback(() => {
    setAnswers(Array(QUIZ_QUESTIONS.length).fill(-1));
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    capture({ event: "quiz_reset", properties: { page: pathname } });
  }, [capture, pathname]);

  const allAnswered = answers.every((a) => a >= 0);
  const totalScore = answers.reduce((sum, ans, idx) => {
    if (ans < 0) return sum;
    return sum + QUIZ_QUESTIONS[idx].options[ans].score;
  }, 0);
  const band = allAnswered ? getBandForScore(totalScore) : null;

  // Fire quiz_complete once when all answered
  useEffect(() => {
    if (allAnswered && band) {
      capture({
        event: "quiz_complete",
        properties: { band: band.name, score: totalScore, max_score: 16 },
      });
    }
    // Only fire once per completion; we track via band state implicitly
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allAnswered]);

  return {
    answers,
    selectAnswer,
    reset,
    allAnswered,
    totalScore,
    band,
  };
}
