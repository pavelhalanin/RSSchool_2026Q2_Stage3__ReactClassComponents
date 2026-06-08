import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ErrorBoundary from "./ErrorBoundary";

const ThrowError = () => {
  throw new Error("Test error");
};

describe("ErrorBoundary", () => {
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;

  beforeEach(() => {
    console.log = vi.fn();
    console.error = vi.fn();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });

  it("renders children when no error", () => {
    render(
      <ErrorBoundary>
        <div>Normal content</div>
      </ErrorBoundary>,
    );

    const normalContent = screen.getByText("Normal content");
    expect(normalContent).toBeDefined();
  });

  it("shows AlertDanger with error when child throws", () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    const fallbackTitle = screen.getByText("Fallback UI (ErrorBoundary)");
    const errorText = screen.getByText(/Test error/i);

    expect(fallbackTitle).toBeDefined();
    expect(errorText).toBeDefined();
    expect(console.log).toHaveBeenCalled();
  });
});
