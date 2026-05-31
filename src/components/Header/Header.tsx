import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import type { JSX } from 'react';
import ContainerSection from '../ContainerSection/ContainerSection';
import ThemeCheckbox from '../ThemeCheckbox/ThemeCheckbox';
import ErrorButton from '../ErrorButton/ErrorButton';

export default function Header(): JSX.Element {
  return (
    <ContainerSection>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
          <li>
            <ThemeCheckbox />
          </li>
          <li>
            <ErrorButton />
          </li>
        </ul>
      </nav>
    </ContainerSection>
  );
}
