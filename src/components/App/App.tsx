import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Main from '../Main/Main';
import About from '../About/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />;
    </ErrorBoundary>
  );
}
