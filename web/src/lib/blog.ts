import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

export type { BlogPost };

const postsDirectory = path.join(process.cwd(), "content", "blog");

function readPostFile(fileName: string): BlogPost | null {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const date = data.date ? new Date(data.date) : null;
  const now = new Date();
  now.setHours(23, 59, 59, 999);

  // Skip posts explicitly marked unpublished
  if (data.published === false) return null;
  // Skip future-dated posts (scheduling)
  if (date && date > now) return null;

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || now.toISOString().split("T")[0],
    image: data.image,
    published: data.published !== false,
    author: data.author,
    tags: data.tags || [],
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts: BlogPost[] = [];

  for (const name of fileNames) {
    if (!name.endsWith(".md")) continue;
    const post = readPostFile(name);
    if (post) allPosts.push(post);
  }

  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return readPostFile(`${slug}.md`);
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
