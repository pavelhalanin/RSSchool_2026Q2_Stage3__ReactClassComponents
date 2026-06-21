import Header from '../../components/Header/Header';
import type { JSX, ReactNode } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

interface IPropsRootOutlet {
  children: ReactNode;
}

export default function RootOutlet(props: IPropsRootOutlet): JSX.Element {
  return (
    <ErrorBoundary>
      <Header />
      {props.children}
    </ErrorBoundary>
  );
}
