// declare module '/_next/static/chunks/pages/pagefind/pagefind.js' {
//     const pagefind: any;
//     export default pagefind;
//   }

declare module '/_next/static/chunks/pages/pagefind/pagefind.js' {
  const pagefind: {
    search: (query: string) => Promise<{ results: any[] }>;
  };
  export default pagefind;
}