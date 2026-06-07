import CountryLibrary from "../CountryLibrary/CountryLibrary";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import FormArray from "../FormArray/FormArray";
import FormButtons from "../NavButtons/NavButtons";

export default function App() {
  return (
    <ErrorBoundary>
      <CountryLibrary />
      <FormButtons />
      <FormArray />
    </ErrorBoundary>
  );
}
