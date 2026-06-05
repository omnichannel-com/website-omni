import { notFound } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogCover from "@/components/blog-sections/blog-cover";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | omnichannel CX`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="container mx-auto my-8 px-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold font-display ocx-gradient-text text-center">
          {post.title}
        </h1>
        <p className="text-ocx-fg-muted text-center text-xl px-4 mt-2">
          {post.date ? format(new Date(post.date), "MMMM dd, yyyy") : ""}
        </p>
        {post.author && (
          <p className="text-ocx-fg-muted text-sm mt-1">By {post.author}</p>
        )}
      </div>

      {post.image ? (
        <div className="relative my-8 w-full flex justify-center items-center">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="rounded-ocx-xl object-cover w-full max-w-3xl aspect-[16/9] shadow-ocx-md"
            priority
          />
        </div>
      ) : (
        <div className="relative my-8 w-full flex justify-center items-center">
          <BlogCover
            className="rounded-ocx-xl w-full max-w-3xl aspect-[16/9] shadow-ocx-md"
            label={post.tags?.[0] || "Blog"}
          />
        </div>
      )}

      <article className="max-w-3xl mx-auto prose prose-lg prose-ocx">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-3xl font-bold font-display text-ocx-fg-primary mt-10 mb-4 leading-tight">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-bold font-display text-ocx-fg-primary mt-8 mb-3 leading-tight">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-lg text-ocx-fg leading-ocx-base mb-5">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="text-ocx-fg-primary font-bold">
                {children}
              </strong>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 mb-5 space-y-2">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 mb-5 space-y-2">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="text-lg text-ocx-fg leading-ocx-base">
                {children}
              </li>
            ),
            img: ({ src, alt }) => (
              <span className="my-8 flex justify-center">
                <Image
                  src={src || ""}
                  alt={alt || ""}
                  width={800}
                  height={450}
                  className="rounded-ocx-xl object-cover w-full max-w-3xl aspect-[16/9] shadow-ocx-md"
                />
              </span>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </section>
  );
}
