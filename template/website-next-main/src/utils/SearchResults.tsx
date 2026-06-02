// components/SearchResults.tsx
import React from 'react';
import Link from 'next/link';
import { transformUrl } from './urlUtils';

interface SearchResultsProps {
  results: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (results.length === 0) {
    return <p className="text-center text-gray-500">No results found</p>;
  }

  return (
    <div className="max-h-[60vh] overflow-y-auto ResultHeight bg-white p-4 rounded-lg shadow-lg">
      {results.map((result, index) => (
        <Result key={index} result={result} />
      ))}
    </div>
  );
};

const Result: React.FC<{ result: any }> = ({ result }) => {
  const [data, setData] = React.useState<any | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      const data = await result.data();
      setData(data);
      console.log(data)
    }
    fetchData();
  }, [result]);

  if (!data) return null;

  const transformedUrl = transformUrl(data.url);

  return (
    <Link href={transformedUrl} passHref>
      <a className="block p-4 mb-2 border rounded hover:bg-gray-100">
        <h3 className="text-lg font-semibold text-secondaryColor">
          {data.meta.title}
        </h3>
        <p className="text-sm text-primaryColor">
          {data.excerpt}
        </p>
      </a>
    </Link>
  );
};

export default SearchResults;
