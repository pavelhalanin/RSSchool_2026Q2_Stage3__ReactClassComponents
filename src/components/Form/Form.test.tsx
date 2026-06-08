import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Form from "./Form";

vi.mock("./Form.module.css", () => ({
  default: { form: "mock-form-class" },
}));

describe("Form", () => {
  it("renders children inside a div with form class", () => {
    render(
      <Form>
        <div data-testid="child">Content</div>
      </Form>,
    );

    const child = screen.getByTestId("child");
    expect(child).toBeDefined();
    expect(child.textContent).toBe("Content");

    const div = child.parentElement;
    expect(div).not.toBeNull();
    expect(div?.className).toBe("mock-form-class");
  });
});
