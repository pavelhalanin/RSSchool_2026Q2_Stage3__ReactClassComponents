import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Main from '../../pages/Main/Main';
import About from '../../pages/About/About';
import Error404 from '../../pages/Error404/Error404';
import RootOutlet from '../../outlet/RootOutlet/RootOutlet';
import type { JSX } from 'react';
import { CardOutlet } from '../../outlet/CardOutlet/CardOutlet';

const routesConfig = createRoutesFromElements(
  <Route path="/" element={<RootOutlet />}>
    <Route path="/" element={<Navigate to={'/pokemon/1'} replace />} />
    <Route path="pokemon" element={<Main />} />
    <Route path="pokemon/:page" element={<Main />}>
      <Route path=":details" element={<CardOutlet />} />
    </Route>
    <Route path="about" element={<About />} />
    <Route path="*" element={<Error404 />} />
  </Route>
);

const router =
  import.meta.env.VITE_ROUTER_TYPE === 'hash'
    ? createHashRouter(routesConfig)
    : createBrowserRouter(routesConfig);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
