import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import type { JSX } from 'react';

export default function RootLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
