"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import { Search, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types/blog";
import BlogCover from "./blog-cover";
import { usePosthogConsent } from "@/hooks/use-posthog";

interface BlogCardsProps {
  initialBlogs: BlogPost[];
}

const BlogCards: React.FC<BlogCardsProps> = ({ initialBlogs }) => {
    const router = useRouter();
    const { capture } = usePosthogConsent();
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("newest");

    const blogs: BlogPost[] = initialBlogs;

    const handleViewMore = (slug: string, title: string) => {
        capture({
            event: "cta_click",
            properties: { cta_label: `blog_card_${slug}`, page: "/blog" },
        });
        router.push(`/blog/${slug}`);
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        const trimmed = text.slice(0, maxLength - 3);
        const lastSpace = trimmed.lastIndexOf(" ");
        return (lastSpace > 0 ? trimmed.slice(0, lastSpace) : trimmed) + "...";
    };

    const filteredBlogs = blogs
        .filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            const dateA = a.date ? new Date(a.date) : new Date();
            const dateB = b.date ? new Date(b.date) : new Date();
            return sortOrder === 'newest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
        });

    return (
        <section className='container mx-auto my-8'>
            {/* Search and Sorting UI */}
            <div className='flex flex-col md:flex-row justify-center items-center mb-8 gap-4'>
                <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full h-12 p-3 pl-12 text-ocx-fg bg-ocx-bg-subtle font-display text-lg rounded-lg border-2 border-ocx-border/30 focus:outline-none focus:ring-2 focus:ring-ocx-mauve hover:bg-ocx-bg-subtle"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* Search Icon */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ocx-fg-muted">
                        <Search className="w-5 h-5" strokeWidth={2} />
                    </div>
                </div>
                <select
                    className="w-40 md:w-48 h-12 bg-ocx-bg-subtle text-ocx-fg font-display text-lg p-2 rounded-lg border-2 border-ocx-border/30 focus:outline-none focus:ring-2 focus:ring-ocx-mauve hover:bg-ocx-bg-subtle"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="newest">Newest to Oldest</option>
                    <option value="oldest">Oldest to Newest</option>
                </select>
            </div>

            <div className='flex flex-wrap -mx-4 justify-center'>
                {filteredBlogs.map((blog) => (
                    <div key={blog.slug} className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8">
                        <div className="bg-ocx-bg-subtle border border-ocx-border text-ocx-fg p-5 flex flex-col gap-4 h-full rounded-ocx-lg shadow-ocx-sm hover:shadow-ocx-md hover:-translate-y-px transition-all duration-ocx-base">
                            <div className="flex-grow cursor-pointer" onClick={() => handleViewMore(blog.slug, blog.title)}>
                                {blog.image ? (
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={400}
                                        height={300}
                                        className="rounded-ocx-md object-cover w-full h-auto aspect-[4/3]"
                                    />
                                ) : (
                                    <BlogCover
                                        className="rounded-ocx-md w-full aspect-[4/3]"
                                        label={blog.tags?.[0] || "Blog"}
                                    />
                                )}
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                                <p className="text-ocx-fg-muted text-sm mb-2">
                                    {blog.date
                                        ? format(new Date(blog.date), "MMMM dd, yyyy")
                                        : "Date not available"}
                                </p>
                                <p className="mb-4">
                                    {blog.description
                                        ? truncateText(blog.description, 300)
                                        : "No description available"}
                                </p>
                                <button
                                    className="inline-flex items-center gap-2 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-bold text-sm px-6 py-2.5 rounded-ocx-md shadow-ocx-sm hover:bg-[var(--btn-primary-bg-hover)] hover:shadow-ocx-md hover:-translate-y-px active:translate-y-0 transition-all duration-ocx-base"
                                    onClick={() => handleViewMore(blog.slug, blog.title)}
                                >
                                    <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogCards;
