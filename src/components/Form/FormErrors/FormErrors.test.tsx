import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import FormErrors from "./FormErrors";

vi.mock("../../AlertDanger/AlertDanger", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="alert-danger">{children}</div>
  ),
}));

vi.mock("./FormErrors.module.css", () => ({
  default: {
    error__wrapper: "error__wrapper",
    error__line: "error__line",
    error__content: "error__content",
  },
}));

describe("FormErrors", () => {
  it("renders nothing when errors array is empty", () => {
    const { container } = render(<FormErrors errors={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders error messages when errors array has items", () => {
    const errors = ["Error 1", "Error 2", "Invalid input"];
    render(<FormErrors errors={errors} />);

    expect(screen.getByTestId("alert-danger")).toBeDefined();
    expect(screen.getByText("Error 1")).toBeDefined();
    expect(screen.getByText("Error 2")).toBeDefined();
    expect(screen.getByText("Invalid input")).toBeDefined();
  });
});
