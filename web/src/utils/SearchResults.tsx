// components/SearchResults.tsx
import React from 'react';
import Link from 'next/link';
import { transformUrl } from './urlUtils';

interface PagefindResult {
  id: string;
  url: string;
  meta: { title: string };
  excerpt: string;
}

interface SearchResultItem {
  id: string;
  data: () => Promise<PagefindResult>;
}

interface SearchResultsProps {
  results: SearchResultItem[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (results.length === 0) {
    return <p className="text-center text-ocx-fg-muted">No results found</p>;
  }

  return (
    <div className="max-h-[60vh] overflow-y-auto h-96 bg-ocx-bg p-4 rounded-lg shadow-ocx-md border border-ocx-border">
      {results.map((result) => (
        <Result key={result.id} result={result} />
      ))}
    </div>
  );
};

const Result: React.FC<{ result: SearchResultItem }> = ({ result }) => {
  const [data, setData] = React.useState<PagefindResult | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      const data = await result.data();
      if (!cancelled) {
        setData(data);
      }
    }
    fetchData();
    return () => { cancelled = true; };
  }, [result]);

  if (!data) {
    return (
      <div className="block p-4 mb-2 border border-ocx-border rounded bg-ocx-bg animate-pulse">
        <div className="h-5 bg-ocx-bg-muted rounded w-1/3 mb-2" />
        <div className="h-4 bg-ocx-bg-muted rounded w-3/4" />
      </div>
    );
  }

  const transformedUrl = transformUrl(data.url);

  return (
    <Link href={transformedUrl} className="block p-4 mb-2 border border-ocx-border rounded hover:bg-ocx-bg-muted transition-colors duration-ocx-fast">
      <h3 className="text-lg font-semibold text-ocx-fg-accent">
        {data.meta.title}
      </h3>
      <p className="text-sm text-ocx-fg-muted">
        {data.excerpt}
      </p>
    </Link>
  );
};

export default SearchResults;
