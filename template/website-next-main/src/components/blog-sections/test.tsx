import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Input, DatePicker, Select, SelectItem } from '@nextui-org/react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import blogs from '../../utils/blog';
import { format } from 'date-fns';


type DateValue = CalendarDate | CalendarDateTime | ZonedDateTime | null;

type CalendarDate = { year: number, month: number, day: number };
type CalendarDateTime = {};
type ZonedDateTime = {};



const BlogCards = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<DateValue | null>(null);
    const [sortOrder, setSortOrder] = useState<string>('newest');

    const handleViewMore = (id: number) => {
        router.push(`/blog/${id}`);
    };

    const dateToJSDate = (dateValue: DateValue): Date | null => {
        if (dateValue) {
            if ('year' in dateValue && 'month' in dateValue && 'day' in dateValue) {
                return new Date(dateValue.year, dateValue.month - 1, dateValue.day);
            }
            // Handle CalendarDateTime and ZonedDateTime as necessary
            // For example, if they have similar properties
            return new Date(dateValue as unknown as Date); // Adjust this as needed
        }
        return null;
    };

    const handleResetDate = () => {
        setSelectedDate(null);
    };

    // Filter and sort blogs
    const filteredBlogs = blogs
        .filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(blog => {
            const blogDate = new Date(blog.timestamp);
            const selectedDateValue = dateToJSDate(selectedDate);
            return !selectedDateValue || blogDate.toDateString() === selectedDateValue.toDateString();
        })
        .sort((a, b) => {
            const dateA = new Date(a.timestamp);
            const dateB = new Date(b.timestamp);
            return sortOrder === 'newest' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
        });

    return (
        <section className='container mx-auto my-8'>
<div className='flex flex-col md:flex-row justify-left items-center mb-8 gap-4'>
<div className="relative w-full md:w-1/3 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-12 p-3 pl-12 text-textClr bg-cardClr font-nunito text-lg rounded-lg border-2 border-borderClr/30 focus:outline-none focus:ring-2 focus:ring-secondaryColor hover:bg-cardClr"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-textClr" />
      </div>

      {/* Select Dropdown */}
      <select
          className="w-40 md:w-48 h-12 bg-cardClr text-textClr font-nunito text-lg p-2 rounded-lg border-2 border-borderClr/30 focus:outline-none focus:ring-2 focus:ring-secondaryColor hover:bg-cardClr"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="" disabled>
            Select Sort Order
          </option>
          <option value="newest">
            Newest to Oldest
          </option>
          <option value="oldest">
            Oldest to Newest
          </option>
        </select>

</div>



            <div className='flex flex-wrap -mx-4 justify-center'>
                {filteredBlogs.map(blog => (
                    <div key={blog.id} className='w-full md:w-1/2 lg:w-1/2 px-4 mb-8'>
                        <div className='bg-cardClr border-2 border-borderClr/30 text-textClr p-5 flex flex-col gap-4 h-full rounded-2xl'>
                            <div className='flex-grow cursor-pointer' onClick={() => handleViewMore(blog.id)}>
                                <Image src={blog.image} alt={blog.title} width={400} height={300} className='rounded-lg object-cover w-full h-auto' />
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>
                                <p className='text-secondaryColor text-sm mb-2'>{format(new Date(blog.timestamp), 'MMMM dd, yyyy')}</p>
                                <p className='mb-4'>{blog.description}</p>
                                <button className="bg-secondaryColor text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-secondaryColor/35 transition-shadow duration-300" onClick={() => handleViewMore(blog.id)}>Read more</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogCards;
