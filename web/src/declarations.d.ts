// declarations.d.ts

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
