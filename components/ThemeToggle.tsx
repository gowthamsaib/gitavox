import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

type ThemeToggleProps = {
  size?: number;
  className?: string;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ size = 20, className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={
        className ||
        'p-2.5 rounded-full bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 transition-all dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-400 dark:hover:text-white'
      }
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <Sun size={size} /> : <Moon size={size} />}
    </button>
  );
};
