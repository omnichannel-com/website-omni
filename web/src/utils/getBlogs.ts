import { getAllPosts } from "@/lib/blog";
import { BlogPost } from "@/types/blog";

export const getBlogs = (): BlogPost[] => getAllPosts();