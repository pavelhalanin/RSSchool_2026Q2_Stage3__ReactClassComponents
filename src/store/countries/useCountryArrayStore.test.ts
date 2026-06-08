import { describe, it, expect, vi } from "vitest";
import { useCountryArrayStore } from "./useCountryArrayStore";

vi.mock("./../../const/country.json", () => ({
  default: [{ name: "Mock Country", code: "MC" }],
}));

describe("useCountryArrayStore", () => {
  it("has initial state with empty countryArray", () => {
    const state = useCountryArrayStore.getState();
    expect(state.countryArray).toEqual([]);
    expect(state.countryArrayActions).toBeDefined();
    expect(typeof state.countryArrayActions.loadCountryArray).toBe("function");
  });

  it("loadCountryArray populates countryArray from mock data", () => {
    const { countryArrayActions } = useCountryArrayStore.getState();
    countryArrayActions.loadCountryArray();
    const state = useCountryArrayStore.getState();
    expect(state.countryArray).toEqual([{ name: "Mock Country", code: "MC" }]);
  });
});
