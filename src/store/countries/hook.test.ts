import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCountryArray, useCountryArrayActions } from "./hook";
import { useCountryArrayStore } from "./useCountryArrayStore";

vi.mock("./../../const/country.json", () => ({
  default: [{ name: "TestLand", code: "TL" }],
}));

describe("useCountryArray", () => {
  beforeEach(() => {
    useCountryArrayStore.setState({ countryArray: [] });
  });

  it("returns countryArray from store", () => {
    const { result } = renderHook(() => useCountryArray());
    expect(result.current).toEqual([]);
  });
});

describe("useCountryArrayActions", () => {
  beforeEach(() => {
    useCountryArrayStore.setState({ countryArray: [] });
  });

  it("returns countryArrayActions from store", () => {
    const { result } = renderHook(() => useCountryArrayActions());
    expect(result.current).toBeDefined();
    expect(typeof result.current.loadCountryArray).toBe("function");
  });

  it("loadCountryArray updates countryArray when called", () => {
    const { result: actionsResult } = renderHook(() =>
      useCountryArrayActions(),
    );
    const { result: arrayResult, rerender } = renderHook(() =>
      useCountryArray(),
    );

    expect(arrayResult.current).toEqual([]);

    act(() => {
      actionsResult.current.loadCountryArray();
    });

    rerender();
    expect(arrayResult.current).toEqual([{ name: "TestLand", code: "TL" }]);
  });
});
