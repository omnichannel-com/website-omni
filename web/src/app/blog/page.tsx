import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import BlogHero from "@/components/blog-sections/blog-hero";
import BlogCards from "@/components/blog-sections/Blog-cards";
import { getBlogs } from "@/utils/getBlogs";

export default function BlogsPage() {
  const blogs = getBlogs();
  return (
    <StickyScrollLayout>
      <BlogHero />
      <BlogCards initialBlogs={blogs} />
    </StickyScrollLayout>
  );
}
