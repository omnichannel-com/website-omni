/**
 * Quiz data - 4 questions, 4 options each, scored 1–4.
 * 
 */

export interface QuizOption {
  label: string;
  score: number;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "How joined-up are your customer channels today?",
    options: [
      { label: "Each channel runs separately, its own team and tools", score: 1 },
      { label: "Customers use several channels, but context does not follow them", score: 2 },
      { label: "Channels are integrated and context follows the customer", score: 3 },
      { label: "Customers move freely and never notice the channel", score: 4 },
    ],
  },
  {
    question: "How much of your repeatable work is written down as clear procedures?",
    options: [
      { label: "Mostly in people's heads", score: 1 },
      { label: "Some documented, often out of date", score: 2 },
      { label: "Most core processes documented", score: 3 },
      { label: "Documented, versioned, and owned", score: 4 },
    ],
  },
  {
    question: "Where is AI in your operation today?",
    options: [
      { label: "Not started, or stuck in pilots", score: 1 },
      { label: "A few experiments, nothing in production", score: 2 },
      { label: "In production for a few low-risk tasks", score: 3 },
      { label: "In production across several processes, with oversight", score: 4 },
    ],
  },
  {
    question: "If an AI made a customer-facing decision, could you show who approved it and why?",
    options: [
      { label: "No", score: 1 },
      { label: "Only by reconstructing it by hand", score: 2 },
      { label: "For some processes", score: 3 },
      { label: "Yes, automatically, for anything that matters", score: 4 },
    ],
  },
];
