// blog.d.ts
export interface BlogContentText {
    type: "text";
    subheading?: string;
    content?: string;
  }
  
  export interface BlogContentImage {
    type: "image";
    src: string;
    alt: string;
  }
  
  export type BlogContent = BlogContentText | BlogContentImage;
  
  export interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
    timestamp: string;
    content: BlogContent[];
  }
  