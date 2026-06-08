import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useArrayFormData, useArrayFormDataActions } from "./hook";

vi.spyOn(console, "log").mockImplementation(() => {});

vi.mock("zustand/middleware", () => ({
  devtools: <T>(fn: T) => fn,
}));

describe("array form data hooks", () => {
  it("useArrayFormData returns current arrayFormData", () => {
    const { result } = renderHook(() => useArrayFormData());
    expect(result.current).toEqual([]);
  });

  it("useArrayFormDataActions returns actions object", () => {
    const { result } = renderHook(() => useArrayFormDataActions());
    expect(result.current).toBeDefined();
    expect(typeof result.current.pushToArrayFormData).toBe("function");
  });

  it("useArrayFormDataActions can push new item", () => {
    const { result: actions } = renderHook(() => useArrayFormDataActions());
    const { result: data } = renderHook(() => useArrayFormData());

    const newItem = {
      id: "1",
      name: "Test",
      age: 25,
      email: "test@example.com",
      gender: "male" as const,
      isAgree: true,
      photo: "photo.jpg",
      country: "USA",
    };

    act(() => {
      actions.current.pushToArrayFormData(newItem);
    });

    expect(data.current).toHaveLength(1);
    expect(data.current[0]).toEqual(newItem);
  });
});
