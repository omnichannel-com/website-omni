"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, RotateCcw } from "lucide-react";
import { QuizBand } from "@/lib/quiz-bands";
import { CALENDLY_URL } from "@/lib/calendly";
import { usePosthogConsent } from "@/hooks/use-posthog";

interface QuizResultProps {
  band: QuizBand;
  score: number;
  maxScore: number;
  onReset: () => void;
}

export default function QuizResult({ band, score, maxScore, onReset }: QuizResultProps) {
  const pathname = usePathname();
  const { capture } = usePosthogConsent();
  const percentage = Math.round(((score - 4) / (maxScore - 4)) * 100);

  return (
    <div className="mt-8 bg-ocx-dark-blue text-white rounded-ocx-xl p-6 md:p-8 shadow-ocx-md">
      <p className="font-display font-black text-xl md:text-2xl text-white mb-2">
        {band.name}
      </p>

      {/* Score bar */}
      <div className="h-2 rounded-full bg-white/20 overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-ocx-mauve to-ocx-bright-blue transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="font-body text-white/90 mb-6 leading-ocx-base">{band.message}</p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            capture({
              event: "cta_click",
              properties: { cta_label: "book_working_session_quiz", page: pathname },
            })
          }
          className="inline-flex items-center justify-center gap-3 bg-white text-ocx-dark-blue font-display font-bold text-sm px-6 py-3 rounded-ocx-md hover:shadow-ocx-glow transition-all duration-ocx-fast"
        >
          <ArrowRight className="w-4 h-4" />
          Book a working session
        </Link>
        <button
          onClick={onReset}
          className="inline-flex items-center justify-center gap-3 bg-transparent text-white font-display font-semibold text-sm px-6 py-3 rounded-ocx-md border border-white/30 hover:bg-white/10 transition-all duration-ocx-fast"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>
    </div>
  );
}
