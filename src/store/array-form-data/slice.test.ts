import { describe, it, expect, vi } from "vitest";
import { create } from "zustand";
import { createArrayFormDataSlice, defaultFormData } from "./slice";
import type { IArrayFormDataSlice } from "./types";

vi.spyOn(console, "log").mockImplementation(() => {});

describe("createArrayFormDataSlice", () => {
  it("pushToArrayFormData adds item to the beginning of the array", () => {
    const useTestStore = create<IArrayFormDataSlice>((...args) => ({
      ...createArrayFormDataSlice(...args),
    }));

    expect(useTestStore.getState().arrayFormData).toEqual(
      defaultFormData.arrayFormData,
    );

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

    useTestStore.getState().arrayFormDataActions.pushToArrayFormData(newItem);

    expect(useTestStore.getState().arrayFormData).toEqual([newItem]);
  });

  it("pushToArrayFormData prepends multiple items in correct order", () => {
    const useTestStore = create<IArrayFormDataSlice>((...args) => ({
      ...createArrayFormDataSlice(...args),
    }));

    const item1 = {
      id: "1",
      name: "Alice",
      age: 25,
      email: "alice@example.com",
      gender: "female" as const,
      isAgree: true,
      photo: "alice.jpg",
      country: "Canada",
    };
    const item2 = {
      id: "2",
      name: "Bob",
      age: 28,
      email: "bob@example.com",
      gender: "male" as const,
      isAgree: false,
      photo: "bob.jpg",
      country: "Mexico",
    };

    const { arrayFormDataActions } = useTestStore.getState();
    arrayFormDataActions.pushToArrayFormData(item1);
    arrayFormDataActions.pushToArrayFormData(item2);

    const array = useTestStore.getState().arrayFormData;
    expect(array).toHaveLength(2);
    expect(array[0]).toEqual(item2);
    expect(array[1]).toEqual(item1);
  });
});
