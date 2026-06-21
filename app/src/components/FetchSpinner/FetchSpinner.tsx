import type { ReactNode } from 'react';
import styles from './FetchSpinner.module.css';

interface IPropsFetchSpinner {
  children: ReactNode;
}

export default function FetchSpinner(props: IPropsFetchSpinner) {
  return <div className={styles.spinner__wrapper}>{props.children}</div>;
}
