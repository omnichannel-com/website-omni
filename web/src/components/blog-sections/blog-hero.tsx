import React from "react";

function BlogHero() {

  return (
    <section className="relative z-10 pt-28 md:pt-36 pb-10 scroll-mt-28 landscape:p-16">

      <div className="container mx-auto">
   
        <div className="h-full flex flex-col flex-grow items-center justify-center text-ocx-fg relative space-y-3">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-center py-2">
            omnichannel CX <span className="ocx-gradient-text">Insights</span>
          </h1>

          <p className="text-lg md:text-2xl text-center px-4 max-w-full md:max-w-[700px]">
            Industry insights, case studies, and thought leadership on customer experience trends and best practices.
          </p>

        </div>
      </div>
    </section>
  );
}

export default BlogHero;
