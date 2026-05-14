import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Main from '../Main/Main';

export default function App() {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
}
