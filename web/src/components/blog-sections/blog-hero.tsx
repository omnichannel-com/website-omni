import React, { useState } from "react";

function BlogHero() {

  return (
    <section className="relative z-10 py-4 scroll-section-1 landscape:p-16">

      <div className="container mx-auto">
   
        <div className="h-full flex flex-col flex-grow items-center justify-center text-ocx-fg relative top-[2%] space-y-3">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-center py-2">
            omnichannel CX <span className="gradient-text">Insights</span>
          </h1>

          <p className="text-lg md:text-2xl text-center px-4 max-w-full md:max-w-[600px]">
          Explore insights, tips, and trends in tech, business, and innovation. Stay informed with our fresh articles.
          </p>

        </div>
      </div>
    </section>
  );
}

export default BlogHero;
