// Re-export shared types for backward compatibility
export type { BlogPost } from "@/types/blog";

// Legacy blog type (retained for existing content files)
export interface Blog {
  id: number;
  title: string;
  description?: string;
  image?: string;
  timestamp?: string;
  content: BlogContent[];
}

export type BlogContent = TextContent | ListContent | ImageContent;

interface TextContent {
  type: 'text';
  subheading?: string;
  content?: string;
}

interface ListContent {
  type: 'list';
  heading?: string;
  items: string[];
}

interface ImageContent {
  type: 'image';
  src: string;
  alt: string;
}
