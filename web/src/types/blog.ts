export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  published: boolean;
  author?: string;
  tags?: string[];
  content: string;
}
