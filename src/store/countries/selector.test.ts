import { describe, it, expect } from "vitest";
import { countryArraySelector, countryArrayActionSelector } from "./selector";
import type { ICountryArraySlice } from "./types";

describe("countryArraySelector", () => {
  it("returns countryArray from state", () => {
    const mockState: ICountryArraySlice = {
      countryArray: [{ name: "USA", code: "US" }],
      countryArrayActions: {
        loadCountryArray: () => {},
      },
    };
    expect(countryArraySelector(mockState)).toBe(mockState.countryArray);
  });
});

describe("countryArrayActionSelector", () => {
  it("returns countryArrayActions from state", () => {
    const mockActions = { loadCountryArray: () => {} };
    const mockState: ICountryArraySlice = {
      countryArray: [],
      countryArrayActions: mockActions,
    };
    expect(countryArrayActionSelector(mockState)).toBe(mockActions);
  });
});
