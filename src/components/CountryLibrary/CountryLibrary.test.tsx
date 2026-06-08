import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import CountryLibrary from "./CountryLibrary";
import { useCountryArrayActions } from "../../store/countries/hook";

vi.mock("../../store/countries/hook", () => ({
  useCountryArrayActions: vi.fn(),
}));

describe("CountryLibrary", () => {
  it("calls loadCountryArray on mount", () => {
    const mockLoadCountryArray = vi.fn();

    const mockUseCountryArrayActions =
      useCountryArrayActions as unknown as ReturnType<typeof vi.fn>;

    mockUseCountryArrayActions.mockReturnValue({
      loadCountryArray: mockLoadCountryArray,
    });

    render(<CountryLibrary />);

    expect(mockLoadCountryArray).toHaveBeenCalledTimes(1);
  });
});
