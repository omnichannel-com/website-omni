import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Ensure correct import for client-side router
import { format } from 'date-fns';
import { getBlogs } from '@/utils/getBlogs';
import { IconSearch } from '@tabler/icons-react';
import { Blog } from '@/declarations';

const BlogCards: React.FC = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [sortOrder, setSortOrder] = useState<string>('newest');
    
    const blogs: Blog[] = getBlogs();

    const handleViewMore = (id: number) => {
        router.push(`/blog/${id}`);
    };

    const handleResetDate = () => {
        setSelectedDate(null);
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    const filteredBlogs = blogs
        .filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(blog => {
            if (!blog.timestamp) return true; // Skip filtering if timestamp is missing
            const blogDate = new Date(blog.timestamp);
            const selectedDateValue = selectedDate ? selectedDate.toDateString() : null;
            return !selectedDateValue || blogDate.toDateString() === selectedDateValue;
        })
        .sort((a, b) => {
            const dateA = a.timestamp ? new Date(a.timestamp) : new Date();
            const dateB = b.timestamp ? new Date(b.timestamp) : new Date();
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
                      className="w-full h-12 p-3 pl-12 text-textClr bg-cardClr font-nunito text-lg rounded-lg border-2 border-borderClr/30 focus:outline-none focus:ring-2 focus:ring-secondaryColor hover:bg-cardClr"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* Search Icon */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <IconSearch stroke={2} />
                    </div>
                </div>
                <select
                    className="w-40 md:w-48 h-12 bg-cardClr text-textClr font-nunito text-lg p-2 rounded-lg border-2 border-borderClr/30 focus:outline-none focus:ring-2 focus:ring-secondaryColor hover:bg-cardClr"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="newest">Newest to Oldest</option>
                    <option value="oldest">Oldest to Newest</option>
                </select>
            </div>

            <div className='flex flex-wrap -mx-4 justify-center'>
                {filteredBlogs.map(blog => (
                    <div key={blog.id} className='w-full md:w-1/2 lg:w-1/2 px-4 mb-8'>
                        <div className='bg-cardClr border-2 border-borderClr/30 text-textClr p-5 flex flex-col gap-4 h-full rounded-2xl'>
                            <div className='flex-grow cursor-pointer' onClick={() => handleViewMore(blog.id)}>
                                {blog.image && (
                                    <Image 
                                        src={blog.image} 
                                        alt={blog.title || 'Blog Image'} 
                                        width={400} 
                                        height={300} 
                                        className='rounded-lg object-cover w-full h-auto' 
                                    />
                                )}
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>
                                <p className='text-secondaryColor text-sm mb-2'>
                                    {blog.timestamp ? format(new Date(blog.timestamp), 'MMMM dd, yyyy') : 'Date not available'}
                                </p>
                                <p className='mb-4'>{blog.description ? truncateText(blog.description, 300) : 'No description available'}</p>
                                <button className="bg-secondaryColor text-white px-6 py-2 rounded-full outline outline-0 hover:bg-white hover:text-primaryColor hover:outline-2 hover:outline-primaryColor duration-300" onClick={() => handleViewMore(blog.id)}>Read more</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogCards;
