import { describe, it, expect, vi } from "vitest";
import {
  arrayFormDataSelector,
  arrayFormDataActionsSelector,
} from "./selector";
import type { IArrayFormDataSlice } from "./types";

describe("array form data selectors", () => {
  const mockActions = {
    pushToArrayFormData: vi.fn(),
  };

  const mockSlice: IArrayFormDataSlice = {
    arrayFormData: [
      {
        id: "1",
        name: "Test",
        age: 20,
        email: "test@example.com",
        gender: "male",
        isAgree: true,
        photo: "",
        country: "Testland",
      },
    ],
    arrayFormDataActions: mockActions,
  };

  it("arrayFormDataSelector returns arrayFormData", () => {
    const result = arrayFormDataSelector(mockSlice);
    expect(result).toBe(mockSlice.arrayFormData);
  });

  it("arrayFormDataActionsSelector returns arrayFormDataActions", () => {
    const result = arrayFormDataActionsSelector(mockSlice);
    expect(result).toBe(mockActions);
  });
});
