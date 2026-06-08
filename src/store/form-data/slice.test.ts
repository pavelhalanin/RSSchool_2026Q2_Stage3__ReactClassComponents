import { describe, it, expect, vi } from "vitest";
import { create } from "zustand";
import { createFormDataSlice, defaultFormData } from "./slice";
import type { IFormDataSlice } from "./types";

vi.mock("zustand/middleware", () => ({
  devtools: <T>(stateCreator: T) => stateCreator,
}));

const createStore = () =>
  create<IFormDataSlice>()((...args) => ({
    ...createFormDataSlice(...args),
  }));

describe("createFormDataSlice", () => {
  it("has correct initial state", () => {
    const store = createStore();
    expect(store.getState().formData).toEqual(defaultFormData.formData);
  });

  it("getEmptyErrors returns empty error object", () => {
    const store = createStore();
    const empty = store.getState().formDataActions.getEmptyErrors();
    expect(empty).toEqual({
      name: [],
      age: [],
      email: [],
      gender: [],
      isAgree: [],
      photo: [],
      country: [],
      password: [],
      confirmPassword: [],
    });
  });

  it("setFormDataValues updates values", () => {
    const store = createStore();
    const current = store.getState().formData.values;
    store.getState().formDataActions.setFormDataValues({
      ...current,
      name: "Alice",
      age: 25,
    });
    const updated = store.getState().formData.values;
    expect(updated.name).toBe("Alice");
    expect(updated.age).toBe(25);
    expect(updated.email).toBe("");
  });

  it("setFormDataErrors replaces errors", () => {
    const store = createStore();
    const errors = {
      name: ["Name required"],
      age: [],
      email: ["Invalid"],
      gender: [],
      isAgree: [],
      photo: [],
      country: [],
      password: [],
      confirmPassword: [],
    };
    store.getState().formDataActions.setFormDataErrors(errors);
    expect(store.getState().formData.errors).toEqual(errors);
  });

  it("setPassword updates password", () => {
    const store = createStore();
    store.getState().formDataActions.setPassword("secret");
    expect(store.getState().formData.values.password).toBe("secret");
  });

  it("setConfirmPassword updates confirmPassword", () => {
    const store = createStore();
    store.getState().formDataActions.setConfirmPassword("match");
    expect(store.getState().formData.values.confirmPassword).toBe("match");
  });

  it("reset restores default state", () => {
    const store = createStore();
    const current = store.getState().formData.values;
    store.getState().formDataActions.setFormDataValues({
      ...current,
      name: "Changed",
      age: 99,
    });
    store.getState().formDataActions.setFormDataErrors({
      ...store.getState().formData.errors,
      name: ["Some error"],
    });
    expect(store.getState().formData.values.name).toBe("Changed");
    expect(store.getState().formData.errors.name).toEqual(["Some error"]);

    store.getState().formDataActions.reset();

    expect(store.getState().formData.values).toEqual(
      defaultFormData.formData.values,
    );
    expect(store.getState().formData.errors).toEqual(
      defaultFormData.formData.errors,
    );
  });
});
