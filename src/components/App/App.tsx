import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Main from '../Main/Main';
import About from '../../pages/About/About';
import Error404 from '../../pages/Error404/Error404';
import RootLayout from '../../layouts/RootLayout';
import type { JSX } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Navigate to={'/pokemon/?page=1'} replace />} />
      <Route path="pokemon" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
