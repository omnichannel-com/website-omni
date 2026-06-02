import blog1 from '@/blogs/blog-1';
// import blog2 from '@/blogs/blog-2';

export const getBlogs = () => [
    blog1,
    // blog2,
];













// import { Blog } from '@/blog';

// type BlogModule = { default: Blog };

// const context = __webpack_require__.context('../blogs', false, /\.ts$/);
// export const getBlogs = () => {
    //   const blogs = context.keys().map((filename) => {
        //     const blogModule = context(filename) as BlogModule; // Type assertion
        //     return blogModule.default;
        //   });
        //   return blogs;
        // };
        