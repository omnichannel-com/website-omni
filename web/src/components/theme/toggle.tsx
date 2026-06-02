"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="p-1 hover:text-ocx-dark-blue transition-colors duration-ocx-fast"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
      ) : (
        <Moon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
      )}
    </button>
  );
};

export default ThemeToggle;
