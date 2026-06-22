import { Link } from '@/src/i18n/routing';
import styles from './Header.module.css';
import ContainerSection from '../ContainerSection/ContainerSection';
import ThemeCheckbox from '../ThemeCheckbox/ThemeCheckbox';
import ErrorButton from '../ErrorButton/ErrorButton';
import RemoveCacheButtons from './RemoveCacheButtons/RemoveCacheButtons';
import { NextIntlClientProvider } from 'next-intl';

export default async function Header() {
  return (
    <NextIntlClientProvider>
      <ContainerSection>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/404">404</Link>
            </li>
            <li>
              <ThemeCheckbox />
            </li>
            <li>
              <ErrorButton />
            </li>
            <li>
              <RemoveCacheButtons />
            </li>
          </ul>
        </nav>
      </ContainerSection>
    </NextIntlClientProvider>
  );
}
