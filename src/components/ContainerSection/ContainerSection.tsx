import { type ReactNode } from 'react';
import styles from './ContainerSection.module.css';

interface IPropsContainerSection {
  children: ReactNode;
}

export default function ContainerSection(props: IPropsContainerSection) {
  return (
    <div className={styles.container}>
      <section className={styles.section}>{props.children}</section>
    </div>
  );
}
