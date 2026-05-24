import { type ReactNode } from 'react';
import styles from './AlertDanger.module.css';
import { useTheme } from '../../hook/useTheme/useTheme';

interface IPropsAlertDanger {
  children: ReactNode;
}

export default function AlertDanger(props: IPropsAlertDanger) {
  const { theme } = useTheme();

  return (
    <div className={styles.alert_danger} data-theme={theme}>
      {props.children}
    </div>
  );
}
