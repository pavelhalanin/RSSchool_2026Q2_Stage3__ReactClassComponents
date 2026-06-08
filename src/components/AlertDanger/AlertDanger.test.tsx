import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AlertDanger from "./AlertDanger";

describe("AlertDanger", () => {
  it("render children", () => {
    render(<AlertDanger>Error message</AlertDanger>);

    const div = screen.getByText("Error message");

    expect(div).toBeDefined();
  });
});
