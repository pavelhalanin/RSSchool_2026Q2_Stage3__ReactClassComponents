import Header from '../../components/Header/Header';
import type { ReactNode } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

interface IPropsRootOutlet {
  children: ReactNode;
}

export default async function RootOutlet(props: IPropsRootOutlet) {
  return (
    <ErrorBoundary>
      <Header />
      {props.children}
    </ErrorBoundary>
  );
}
