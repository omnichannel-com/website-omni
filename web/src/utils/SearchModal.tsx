// components/SearchModal.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { X } from "lucide-react";
import SearchField from './SearchField';
import SearchResults from './SearchResults';

interface SearchResultItem {
  id: string;
  data: () => Promise<{
    id: string;
    url: string;
    meta: { title: string };
    excerpt: string;
  }>;
}

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [results, setResults] = useState<SearchResultItem[]>([]);

  useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === 'undefined') {
        try {
          window.pagefind = await import(
            // @ts-expect-error pagefind.js is generated after build
            /* webpackIgnore: true */ '/pagefind/pagefind.js'
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

  const handleSearch = useCallback(async (query: string) => {
    if (window.pagefind && query) {
      const search = await window.pagefind.search(query);
      setResults(search.results);
    } else {
      setResults([]);
    }
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-ocx-bg/50 backdrop-blur-sm z-[200]"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-4xl bg-ocx-bg p-4 rounded-ocx-lg shadow-ocx-lg flex flex-col gap-4 border border-ocx-border">
        <button onClick={onClose} className="absolute top-2 right-2 text-ocx-fg-muted hover:text-ocx-fg-primary transition-colors duration-ocx-fast rounded-full p-1 bg-ocx-bg-subtle">
          <X className="w-6 h-6" strokeWidth={2} />
        </button>
        <h2 className='font-display text-ocx-fg-primary text-2xl md:text-3xl font-semibold'>Search</h2>
        <SearchField onSearch={handleSearch} />
        <SearchResults results={results} />
      </div>
    </div>
  );
};

export default SearchModal;
