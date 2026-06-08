import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  useFormDataValue,
  useFormDataErrors,
  useFormDataActions,
} from "./hook";
import { useFormDataStore } from "./useFormDataStore";

vi.mock("zustand/middleware", () => ({
  devtools: <T>(stateCreator: T) => stateCreator,
}));

describe("form data hooks", () => {
  it("useFormDataValue returns form values", () => {
    const { result } = renderHook(() => useFormDataValue());
    expect(result.current).toEqual(useFormDataStore.getState().formData.values);
  });

  it("useFormDataErrors returns form errors", () => {
    const { result } = renderHook(() => useFormDataErrors());
    expect(result.current).toEqual(useFormDataStore.getState().formData.errors);
  });

  it("useFormDataActions returns form actions", () => {
    const { result } = renderHook(() => useFormDataActions());
    expect(result.current).toBe(useFormDataStore.getState().formDataActions);
  });
});
