import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import type { FieldError } from "react-hook-form";
import ReactHookFormError from "./ReactHookFormError";

vi.mock("../../AlertDanger/AlertDanger", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="alert-danger">{children}</div>
  ),
}));

describe("ReactHookFormError", () => {
  it("renders nothing when error is not provided", () => {
    const { container } = render(<ReactHookFormError />);
    expect(container.firstChild).toBeNull();
  });

  it("renders error message when error exists", () => {
    const mockError: FieldError = {
      type: "required",
      message: "This field is required",
    };
    render(<ReactHookFormError error={mockError} />);

    expect(screen.getByTestId("alert-danger")).toBeDefined();
    expect(screen.getByText("This field is required")).toBeDefined();
  });
});
