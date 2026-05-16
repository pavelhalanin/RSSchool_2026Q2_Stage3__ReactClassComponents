import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Main from '../Main/Main';
import About from '../About/About';
import Error404 from '../Error404/Error404';
import RootLayout from '../../layouts/RootLayout';
import type { JSX } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

export default function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />;
    </ErrorBoundary>
  );
}
