import { useEffect } from 'react';

const SearchUI = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/_pagefind/pagefind.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="search" className="pagefind-ui"></div>;
};

export default SearchUI;