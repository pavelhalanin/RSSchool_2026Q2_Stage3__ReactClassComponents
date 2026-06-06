import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import FormButtons from "../NavButtons/NavButtons";

export default function App() {
  return (
    <ErrorBoundary>
      <FormButtons />
    </ErrorBoundary>
  );
}
