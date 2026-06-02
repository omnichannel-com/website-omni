import { useEffect } from 'react';

const SearchUI = () => {
  useEffect(() => {
    const existing = document.querySelector('script[data-pagefind-ui]');
    if (existing) return;

    const script = document.createElement('script');
    script.src = '/pagefind/pagefind-ui.js';
    script.async = true;
    script.dataset.pagefindUi = '';
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div id="search" className="pagefind-ui"></div>;
};

export default SearchUI;