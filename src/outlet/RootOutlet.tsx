import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import type { JSX } from 'react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

export default function RootOutlet(): JSX.Element {
  return (
    <ErrorBoundary>
      <Header />
      <Outlet />
    </ErrorBoundary>
  );
}
