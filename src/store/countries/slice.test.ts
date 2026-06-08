import { describe, it, expect, vi } from "vitest";
import { create } from "zustand";
import { createCountryArraySlice, defaultCountryArray } from "./slice";
import type { ICountryArraySlice } from "./types";

vi.mock("./../../const/country.json", () => ({
  default: [
    { name: "Test Country", code: "TC" },
    { name: "Another Country", code: "AC" },
  ],
}));

describe("createCountryArraySlice", () => {
  it("loadCountryArray populates countryArray with country data", () => {
    const useTestStore = create<ICountryArraySlice>((...args) => ({
      ...createCountryArraySlice(...args),
    }));

    expect(useTestStore.getState().countryArray).toEqual(
      defaultCountryArray.countryArray,
    );

    useTestStore.getState().countryArrayActions.loadCountryArray();

    expect(useTestStore.getState().countryArray).toEqual([
      { name: "Test Country", code: "TC" },
      { name: "Another Country", code: "AC" },
    ]);
  });
});
