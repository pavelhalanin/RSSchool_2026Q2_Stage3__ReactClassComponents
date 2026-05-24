import { useContext } from 'react';
import { ThemeContext } from '../../context/theme/ThemeContext';
import styles from './ThemeCheckbox.module.css';
import MoonIcon from './MoonIcon/MoonIcon';
import SunIcon from './SunIcon/SunIcon';

export default function ThemeCheckbox() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('ThemeContext must be used within ThemeProvider');
  }

  const { theme, changeTheme } = context;

  return (
    <>
      <input
        type="checkbox"
        id="theme_checkbox"
        className={styles.theme_checkbox}
        onChange={changeTheme}
      />
      <label htmlFor="theme_checkbox" className={styles.theme_label}>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </label>
    </>
  );
}
