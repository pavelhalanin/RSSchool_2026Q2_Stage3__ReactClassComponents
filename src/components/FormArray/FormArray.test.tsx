import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import FormArray from "./FormArray";
import { useArrayFormData } from "../../store/array-form-data/hook";

vi.mock("../../store/array-form-data/hook", () => ({
  useArrayFormData: vi.fn(),
}));

vi.mock("./FormArray.module.css", () => ({
  default: { array: "mock-array-class" },
}));

vi.mock("./FormArrayElement/FormArrayElement", () => ({
  default: vi.fn(({ element, index }) => (
    <div data-testid={`element-${index}`}>{element.name}</div>
  )),
}));

const mockedUseArrayFormData = vi.mocked(useArrayFormData);

describe("FormArray", () => {
  it("renders empty list when no data", () => {
    mockedUseArrayFormData.mockReturnValue([]);
    const { container } = render(<FormArray />);
    expect(container.querySelector(".mock-array-class")).toBeDefined();
    expect(screen.queryByTestId(/element-/)).toBeNull();
  });

  it("renders list of FormArrayElement components when data exists", () => {
    const mockData = [
      {
        id: "1",
        name: "Item1",
        age: 20,
        email: "a@a.com",
        gender: "male" as const,
        isAgree: true,
        photo: "",
        country: "UA",
      },
      {
        id: "2",
        name: "Item2",
        age: 30,
        email: "b@b.com",
        gender: "female" as const,
        isAgree: false,
        photo: "",
        country: "US",
      },
    ];
    mockedUseArrayFormData.mockReturnValue(mockData);
    render(<FormArray />);
    expect(screen.getByTestId("element-0")).toBeDefined();
    expect(screen.getByTestId("element-1")).toBeDefined();
    expect(screen.getByText("Item1")).toBeDefined();
    expect(screen.getByText("Item2")).toBeDefined();
  });
});
