import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import BlogHero from "@/components/blog-sections/blog-hero";
import BlogCards from "@/components/blog-sections/Blog-cards";
import { getAllPosts } from "@/lib/blog";

export default function BlogsPage() {
  const blogs = getAllPosts();
  return (
    <StickyScrollLayout>
      <BlogHero />
      <BlogCards initialBlogs={blogs} />
    </StickyScrollLayout>
  );
}
