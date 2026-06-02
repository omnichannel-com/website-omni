import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { PiMoon } from "react-icons/pi";
import { LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid SSR mismatch
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? (
        <LuSun   
          className="text-OffWhite text-icon-sm sm:text-icon-md lg:text-icon-lg mt-1"
        />
      ) : (
        <PiMoon  
          className="text-icon-sm sm:text-icon-md lg:text-icon-lg mt-1"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
