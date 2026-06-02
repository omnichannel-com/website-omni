// components/SearchModal.tsx
import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
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
    <div className="fixed inset-0 top-0 flex items-center justify-center bg-cardClr/50 backdrop-blur-sm z-[200]">
      <div className="relative w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4">
        <button onClick={onClose} className="absolute top-2 right-2 text-secondaryColor font-bold text-2xl rounded-full p-1 input-bg">
          <IoCloseOutline />
        </button>
        <h2 className='font-nunito text-secondaryColor xl:text-3xl md:text-2xl font-semibold'>Search</h2>
        <SearchField onSearch={handleSearch} />
        <SearchResults results={results} />
      </div>
    </div>
  );
};

export default SearchModal;
