import { describe, it, expect, vi } from "vitest";
import {
  formDataValuesSelector,
  formDataErrorsSelector,
  formDataActionsSelector,
} from "./selector";
import type { IFormDataSlice } from "./types";

describe("form data selectors", () => {
  const mockActions = {
    setFormDataValues: vi.fn(),
    setFormDataErrors: vi.fn(),
    getEmptyErrors: vi.fn(),
    setPassword: vi.fn(),
    setConfirmPassword: vi.fn(),
    reset: vi.fn(),
  };

  const mockSlice: IFormDataSlice = {
    formData: {
      values: {
        name: "Test",
        age: 30,
        email: "test@example.com",
        gender: "male",
        isAgree: true,
        photo: "photo.jpg",
        country: "USA",
        password: "pass123",
        confirmPassword: "pass123",
      },
      errors: {
        name: [],
        age: [],
        email: ["Invalid email"],
        gender: [],
        isAgree: [],
        photo: [],
        country: [],
        password: [],
        confirmPassword: [],
      },
    },
    formDataActions: mockActions,
  };

  it("formDataValuesSelector returns formData.values", () => {
    const result = formDataValuesSelector(mockSlice);
    expect(result).toEqual(mockSlice.formData.values);
  });

  it("formDataErrorsSelector returns formData.errors", () => {
    const result = formDataErrorsSelector(mockSlice);
    expect(result).toEqual(mockSlice.formData.errors);
  });

  it("formDataActionsSelector returns formDataActions", () => {
    const result = formDataActionsSelector(mockSlice);
    expect(result).toBe(mockActions);
  });
});
