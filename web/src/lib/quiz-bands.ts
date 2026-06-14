/**
 * Quiz band definitions - 4 bands, score range 4–16.
 * All bands use the same CTA: "Book a working session" → Calendly.
 * @see specs/002-update-website-messaging/spec.md
 */

export interface QuizBand {
  name: string;
  minScore: number;
  maxScore: number;
  message: string;
}

export const QUIZ_BANDS: QuizBand[] = [
  {
    name: "Getting started",
    minScore: 4,
    maxScore: 7,
    message:
      "Your channels and work are largely siloed and manual, which is the right place to begin. A Maturity Review maps where you are and finds the safe, high-value first steps for AI with people in control.",
  },
  {
    name: "Building momentum",
    minScore: 8,
    maxScore: 11,
    message:
      "You are multichannel and experimenting with AI, but it is scattered. A Maturity Review turns the pilots into one costed, prioritised roadmap, with the governance to move them into production safely.",
  },
  {
    name: "Advancing",
    minScore: 12,
    maxScore: 15,
    message:
      "You are well on the way, with AI in production and channels coming together. A Maturity Review shows where you can widen automation safely, and where a person must stay on the decision.",
  },
  {
    name: "Almost channelless",
    minScore: 16,
    maxScore: 16,
    message:
      "You are a strong candidate for end-to-end AI-enabled service operations. Let's review how to scale safely while keeping your people in control of every decision that matters.",
  },
];

export function getBandForScore(score: number): QuizBand {
  return QUIZ_BANDS.find((b) => score >= b.minScore && score <= b.maxScore) || QUIZ_BANDS[0];
}
