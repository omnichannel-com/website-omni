import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <div className="border-gradient bg-gradient-to-t from-ocx-dark-blue to-ocx-dark-blue/35 backdrop-blur-md shadow-lg w-full md:w-1/3 sm:w-full px-8 py-4 flex flex-col" data-four-points="some value">

      <Image src="/icons/task.png" alt="hero Icon" height={100} width={100} />
    </div>
  );
};

export default Features;