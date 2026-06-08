import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ReactHookForm from "./ReactHookForm";

vi.mock("../../../store/array-form-data/hook", () => ({
  useArrayFormDataActions: () => ({
    pushToArrayFormData: vi.fn(),
  }),
}));

vi.mock("../../../store/countries/hook", () => ({
  useCountryArray: () => [],
}));

describe("ReactHookForm", () => {
  it("renders form fields", () => {
    render(<ReactHookForm closeModal={vi.fn()} />);

    expect(screen.getByLabelText(/name/i)).toBeDefined();
    expect(screen.getByLabelText(/age/i)).toBeDefined();
    expect(screen.getByLabelText(/email/i)).toBeDefined();
    expect(screen.getByLabelText(/country/i)).toBeDefined();
    expect(screen.getByLabelText(/^password$/i)).toBeDefined();
    expect(screen.getByLabelText(/confirm password/i)).toBeDefined();
    expect(screen.getByRole("button", { name: /send/i })).toBeDefined();
  });
});
