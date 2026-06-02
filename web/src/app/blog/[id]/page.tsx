// app/blog/[id]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { getBlogs } from '@/utils/getBlogs';
import { Blog } from '@/declarations';

// Generate static params for all blog posts
export function generateStaticParams() {
    const blogs = getBlogs();
    const uniqueIds = new Set(blogs.map((blog) => blog.id.toString()));
    return Array.from(uniqueIds).map((id) => ({ id }));
}

// Simple HTML sanitizer: only allow specific safe tags, strip all attributes
const sanitizeHtml = (html: string): string => {
    return html.replace(/<(\/?)(\w+)[^>]*>/g, (_match, slash, tag) => {
        const allowed = ['span', 'strong', 'em', 'b', 'i', 'br', 'p'];
        return allowed.includes(tag.toLowerCase()) ? `<${slash || ''}${tag.toLowerCase()}>` : '';
    });
};

// Function to fetch blog data
const fetchBlog = (id: string): Blog | null => {
    const blogs: Blog[] = getBlogs();
    const blog = blogs.find(blog => blog.id === parseInt(id, 10));
    if (!blog) {
        return null;
    }
    return blog;
};

// Function to parse content and apply styles to span and strong elements
const parseContent = (content: string | undefined) => {
    if (!content) return null;

    const sanitized = sanitizeHtml(content);

    return (
        <div
            className='text-xl text-left'
            dangerouslySetInnerHTML={{
                __html: sanitized.replace(
                    /<span>(.*?)<\/span>/g,
                    '<span class="text-ocx-mauve font-bold">$1</span>'
                ).replace(
                    /<strong>(.*?)<\/strong>/g,
                    '<strong class="text-ocx-mauve font-bold">$1</strong>'
                ),
            }}
        />
    );
};

const BlogDetails = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const blog = fetchBlog(id);

    if (!blog) {
        notFound(); // Use notFound() to handle cases where blog is not found
    }

    return (
        <section className='container mx-auto my-8'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold font-display gradient-text text-center'>{blog?.title}</h1>
            <p className='text-ocx-mauve text-center text-xl px-4'>{blog?.timestamp ? format(new Date(blog.timestamp), 'MMMM dd, yyyy') : ''}</p>
            </div>
            {blog?.image && (
                <div className='relative my-8 w-full flex justify-center items-center'>
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={800}
                        height={600}
                        className='rounded-lg object-cover'
                    />
                </div>
            )}
            <div className='flex flex-col gap-4 '>
                {blog?.content.map((section, index) => (
                    section.type === 'text' ? (
                        <div key={index} className='px-4 '>
                            {section.subheading && <h2 className='text-3xl font-bold font-display text-ocx-mauve mb-0 leading-none'>{section.subheading}</h2>}
                            {parseContent(section.content)}
                        </div>
                        
                    ) : section.type === 'list' ? (
                        <div key={index} className='px-4'>
                            {section.heading && <h2 className='text-3xl font-bold font-display text-ocx-mauve'>{section.heading}</h2>}
                            <ul className='list-disc pl-6'>
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className='text-xl text-left custom-list-item' dangerouslySetInnerHTML={{ __html: sanitizeHtml(item) }}></li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div key={index} className='relative my-8 w-full flex justify-center items-center'>
                            <Image
                                src={section.src ?? ''}
                                alt={section.alt ?? ''}
                                width={800}
                                height={600}
                                className='rounded-lg object-cover'
                            />
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};

export default BlogDetails;
