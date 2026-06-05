declare module '/pagefind/pagefind.js' {
  const pagefind: {
    search: (query: string) => Promise<{ results: any[] }>;
  };
  export default pagefind;
}
