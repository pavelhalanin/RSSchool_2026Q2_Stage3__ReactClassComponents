import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FormButtons from "./NavButtons";

vi.mock("../ReactHookFormRoot/ReactHookFormRoot", () => ({
  default: () => (
    <div data-testid="react-hook-form-root">ReactHookFormRoot</div>
  ),
}));

vi.mock("../UncontrolledFormRoot/UncontrolledFormRoot", () => ({
  default: () => (
    <div data-testid="uncontrolled-form-root">UncontrolledFormRoot</div>
  ),
}));

vi.mock("./NavButtons.module.css", () => ({
  default: { buttons_block: "buttons_block" },
}));

describe("FormButtons", () => {
  it("renders both UncontrolledFormRoot and ReactHookFormRoot", () => {
    render(<FormButtons />);

    const uncontrolled = screen.getByTestId("uncontrolled-form-root");
    const reactHook = screen.getByTestId("react-hook-form-root");

    expect(uncontrolled).toBeDefined();
    expect(reactHook).toBeDefined();
    expect(uncontrolled.textContent).toBe("UncontrolledFormRoot");
    expect(reactHook.textContent).toBe("ReactHookFormRoot");
  });
});
