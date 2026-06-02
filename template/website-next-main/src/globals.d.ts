interface Window {
  pagefind?: {
    search: (query: string) => Promise<{ results: any[] }>;
  };
}
