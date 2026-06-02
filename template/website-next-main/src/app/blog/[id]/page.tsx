// app/blog/[id]/page.tsx

import { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { getBlogs } from '@/utils/getBlogs'; // Make sure this function fetches data correctly
import { Blog } from '@/declarations'; // Import the Blog type

// Function to fetch blog data
const fetchBlog = async (id: string): Promise<Blog | null> => {
    const blogs: Blog[] = getBlogs(); // Ensure getBlogs returns Blog[]
    const blog = blogs.find(blog => blog.id === parseInt(id, 10));
    if (!blog) {
        return null;
    }
    return blog;
};


// Function to parse content and apply styles to span and strong elements
const parseContent = (content: string | undefined) => {
    if (!content) return null;

    return (
        <div
            className='text-xl text-left'
            dangerouslySetInnerHTML={{
                __html: content.replace(
                    /<span>(.*?)<\/span>/g,
                    '<span class="text-secondaryColor font-bold">$1</span>'
                ).replace(
                    /<strong>(.*?)<\/strong>/g,
                    '<strong class="text-secondaryColor font-bold">$1</strong>'
                ),
            }}
        />
    );
};

const BlogDetails = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const blog = use(fetchBlog(id));

    if (!blog) {
        notFound(); // Use notFound() to handle cases where blog is not found
    }

    return (
        <section className='container mx-auto my-8'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold font-nunito gradient-text text-center'>{blog?.title}</h1>
            <p className='text-secondaryColor text-center text-xl px-4'>{blog?.timestamp ? format(new Date(blog.timestamp), 'MMMM dd, yyyy') : ''}</p>
            </div>
            {blog?.image && (
                <div className='relative my-8 w-full flex justify-center items-center'>
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={800}
                        height={600}
                        objectFit="cover"
                        className='rounded-lg'
                    />
                </div>
            )}
            <div className='flex flex-col gap-4 '>
                {blog?.content.map((section, index) => (
                    section.type === 'text' ? (
                        <div key={index} className='px-4 '>
                            {section.subheading && <h2 className='text-3xl font-bold font-nunito text-secondaryColor mb-0 leading-none'>{section.subheading}</h2>}
                            {parseContent(section.content)}
                        </div>
                        
                    ) : section.type === 'list' ? (
                        <div key={index} className='px-4'>
                            {section.heading && <h2 className='text-3xl font-bold font-nunito text-secondaryColor'>{section.heading}</h2>}
                            <ul className='list-disc pl-6'>
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className='text-xl text-left custom-list-item' dangerouslySetInnerHTML={{ __html: item }}></li>
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
                                objectFit="cover"
                                className='rounded-lg'
                            />
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};

export default BlogDetails;
