import { useRef, useState, useEffect } from "react";

export function useStickyScroll() {
  const scrollWrapperRef = useRef<HTMLElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;
    if (!scrollWrapper) return;

    const handleScroll = () => {
      setIsSticky(scrollWrapper.scrollTop > 0);
    };

    scrollWrapper.addEventListener("scroll", handleScroll);
    return () => {
      scrollWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollWrapperRef, isSticky };
}
