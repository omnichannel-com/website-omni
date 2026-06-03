// components/SearchField.tsx
import React, { useState, useEffect } from 'react';

interface SearchFieldProps {
  onSearch: (query: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-3 border border-ocx-border rounded mb-4 bg-ocx-bg text-ocx-fg"
    />
  );
};

export default SearchField;
