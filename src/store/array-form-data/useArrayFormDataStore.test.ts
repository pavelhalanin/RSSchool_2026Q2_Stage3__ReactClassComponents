import { describe, it, expect, vi } from "vitest";
import { useArrayFormDataStore } from "./useArrayFormDataStore";

vi.spyOn(console, "log").mockImplementation(() => {});

vi.mock("zustand/middleware", () => ({
  devtools: <T>(fn: T) => fn,
}));

describe("useArrayFormDataStore", () => {
  it("has initial state with empty array", () => {
    const state = useArrayFormDataStore.getState();
    expect(state.arrayFormData).toEqual([]);
  });

  it("pushToArrayFormData adds item to the beginning", () => {
    const newItem = {
      id: "1",
      name: "John",
      age: 30,
      email: "john@example.com",
      gender: "male" as const,
      isAgree: true,
      photo: "photo.jpg",
      country: "USA",
    };

    useArrayFormDataStore
      .getState()
      .arrayFormDataActions.pushToArrayFormData(newItem);

    const updated = useArrayFormDataStore.getState().arrayFormData;
    expect(updated).toHaveLength(1);
    expect(updated[0]).toEqual(newItem);
  });
});
