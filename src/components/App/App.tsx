import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Modal from "../Modal/Modal";

export default function App() {
  return (
    <ErrorBoundary>
      <Modal />
    </ErrorBoundary>
  );
}
