import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import FormArrayElement from "./FormArrayElement";

vi.mock("../../../hook/useTemporyFlag/useTemporyFlag", () => ({
  default: () => false,
}));

describe("FormArrayElement", () => {
  it("renders element data", () => {
    render(
      <FormArrayElement
        index={0}
        element={{
          id: "2025-01-01T00:00:00.000Z",
          name: "John",
          age: 25,
          email: "john@test.com",
          gender: "male",
          isAgree: true,
          photo: "",
          country: "USA",
        }}
      />,
    );

    expect(screen.getByText("John")).toBeDefined();
    expect(screen.getByText("john@test.com")).toBeDefined();
    expect(screen.getByText("USA")).toBeDefined();
  });
});
