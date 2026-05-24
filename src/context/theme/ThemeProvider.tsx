import { useState, type ReactNode } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';

interface IPropsThemeProvider {
  children: ReactNode;
}

export default function ThemeProvider(props: IPropsThemeProvider) {
  const [theme, setTheme] = useState<Theme>('light');

  const changeTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
