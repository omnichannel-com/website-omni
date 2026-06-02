// components/SearchModal.tsx
import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";
import SearchField from './SearchField';
import SearchResults from './SearchResults';

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === 'undefined') {
        try {
          window.pagefind = await import(
            // @ts-expect-error pagefind.js is generated after build
            /* webpackIgnore: true */ '/_next/static/chunks/pages/pagefind/pagefind.js'
          );
        } catch (e) {
          window.pagefind = {
            search: () => Promise.resolve({ results: [] })
          };
        }
      }
    }
    loadPagefind();
  }, []);

  const handleSearch = async (query: string) => {
    if (window.pagefind && query) {
      const search = await window.pagefind.search(query);
      setResults(search.results);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="fixed inset-0 top-0 flex items-center justify-center bg-ocx-bg/50 backdrop-blur-sm z-[200]">
      <div className="relative w-full max-w-4xl bg-ocx-bg p-4 rounded-ocx-lg shadow-ocx-lg flex flex-col gap-4 border border-ocx-border">
        <button onClick={onClose} className="absolute top-2 right-2 text-ocx-dark-blue hover:text-ocx-mauve transition-colors duration-ocx-fast rounded-full p-1 bg-ocx-bg-subtle">
          <X className="w-6 h-6" strokeWidth={2} />
        </button>
        <h2 className='font-display text-ocx-dark-blue text-2xl md:text-3xl font-semibold'>Search</h2>
        <SearchField onSearch={handleSearch} />
        <SearchResults results={results} />
      </div>
    </div>
  );
};

export default SearchModal;
