import { describe, it, expect, vi } from "vitest";
import { useFormDataStore } from "./useFormDataStore";
import { defaultFormData } from "./slice";

vi.mock("zustand/middleware", () => ({
  devtools: <T>(stateCreator: T) => stateCreator,
}));

describe("useFormDataStore", () => {
  it("has initial state equal to defaultFormData", () => {
    const state = useFormDataStore.getState();
    expect(state.formData).toEqual(defaultFormData.formData);
  });

  it("has formDataActions defined", () => {
    const { formDataActions } = useFormDataStore.getState();
    expect(formDataActions.setFormDataValues).toBeInstanceOf(Function);
    expect(formDataActions.setFormDataErrors).toBeInstanceOf(Function);
    expect(formDataActions.getEmptyErrors).toBeInstanceOf(Function);
    expect(formDataActions.setPassword).toBeInstanceOf(Function);
    expect(formDataActions.setConfirmPassword).toBeInstanceOf(Function);
    expect(formDataActions.reset).toBeInstanceOf(Function);
  });

  it("updates password via setPassword", () => {
    const { formDataActions } = useFormDataStore.getState();
    formDataActions.setPassword("newPass");
    expect(useFormDataStore.getState().formData.values.password).toBe(
      "newPass",
    );
  });
});
