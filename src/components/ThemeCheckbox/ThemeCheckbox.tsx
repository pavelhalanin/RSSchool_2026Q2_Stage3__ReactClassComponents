'use client';

import styles from './ThemeCheckbox.module.css';
import MoonIcon from './MoonIcon/MoonIcon';
import SunIcon from './SunIcon/SunIcon';
import { useTheme } from '../../hook/useTheme/useTheme';

export default function ThemeCheckbox() {
  const { theme, changeTheme } = useTheme();

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
