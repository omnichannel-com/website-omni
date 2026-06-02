import StickyScrollLayout from "@/components/layouts/StickyScrollLayout";
import BlogHero from "@/components/blog-sections/blog-hero";
import BlogCards from "@/components/blog-sections/Blog-cards";

export default function BlogsPage() {
  return (
    <StickyScrollLayout>
      <BlogHero />
      <BlogCards />
    </StickyScrollLayout>
  );
}
