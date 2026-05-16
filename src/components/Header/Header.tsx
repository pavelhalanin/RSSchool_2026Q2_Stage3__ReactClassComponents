import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import type { JSX } from 'react';

export default function Header(): JSX.Element {
  return (
    <div className="container">
      <section className="section">
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
          </ul>
        </nav>
      </section>
    </div>
  );
}
