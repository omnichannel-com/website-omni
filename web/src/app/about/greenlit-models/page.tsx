import React from 'react';
import greenlitModels from '@/components/about-pages/greenlit-models'; // Adjust the import path as needed
import Image from 'next/image';

const GreenlitModels = () => {
  return (
<article>
      
      <div className='flex flex-col justify-center py-12'>
        {/* Title */}
        <h1 className='gradient-text xl:text-[54px] text-[25px] md:text-[35px] font-semibold font-display text-center'>
          {greenlitModels.title}
        </h1>

        <div className='container text-ocx-fg font-body flex flex-col gap-2 '>
          {/* Description */}
          <p className='text-lg font-normal'>
            {greenlitModels.description}
          </p>

          {/* Content */}
          {greenlitModels.content.map((item, index) => {
            if (item.type === 'text') {
              return (
                <div key={index} className='mt-4'>
                  {item.subheading && <h2 className='text-2xl font-display text-ocx-fg-accent font-semibold mb-[-1rem]'>{item.subheading}</h2>}
                  {item.content && <p className='text-base leading-tight m-0'>{item.content}</p>}
                </div>
              );
            }

            if (item.type === 'image') {
              return (
                <div key={index} className='mb-6'>
                  <Image src={item.src} alt={item.alt} width={800} height={600} className='w-full' />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </article>
  );
}

export default GreenlitModels;
