import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

vi.mock("../CountryLibrary/CountryLibrary", () => ({
  default: () => <div data-testid="country-library">CountryLibrary</div>,
}));

vi.mock("../NavButtons/NavButtons", () => ({
  default: () => <div data-testid="form-buttons">FormButtons</div>,
}));

vi.mock("../FormArray/FormArray", () => ({
  default: () => <div data-testid="form-array">FormArray</div>,
}));

vi.mock("../ErrorBoundary/ErrorBoundary", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="error-boundary">{children}</div>
  ),
}));

describe("App", () => {
  it("renders ErrorBoundary with all child components", () => {
    render(<App />);

    expect(screen.getByTestId("error-boundary")).toBeDefined();
    expect(screen.getByTestId("country-library")).toBeDefined();
    expect(screen.getByTestId("form-buttons")).toBeDefined();
    expect(screen.getByTestId("form-array")).toBeDefined();
  });
});
