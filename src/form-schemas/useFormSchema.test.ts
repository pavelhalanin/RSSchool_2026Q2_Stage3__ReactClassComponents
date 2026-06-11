import { describe, it, expect } from "vitest";
import { getFormSchema } from "./useFormSchema";

describe("getFormSchema", () => {
  const validPhoto = new File(["dummy"], "photo.png", { type: "image/png" });

  const validData = {
    name: "John",
    email: "john@example.com",
    age: 25,
    gender: "male",
    isAgree: true,
    photo: validPhoto,
    country: "Belarus",
    password: "Abc123!",
    confirmPassword: "Abc123!",
  };

  it("validates a completely valid form data object", async () => {
    const schema = getFormSchema();
    await expect(schema.validate(validData)).resolves.toEqual(validData);
  });

  it("rejects when any required field is missing", async () => {
    const schema = getFormSchema();
    const invalidData = { ...validData, name: undefined };
    await expect(schema.validate(invalidData)).rejects.toThrow();
  });

  it("rejects when any field fails its specific validation", async () => {
    const schema = getFormSchema();
    const invalidData = { ...validData, email: "invalid" };
    await expect(schema.validate(invalidData)).rejects.toThrow(
      /one @|non-empty local part/,
    );
  });

  it("passes validation for all valid fields in one go", async () => {
    const schema = getFormSchema();
    const isValid = await schema.isValid(validData);
    expect(isValid).toBe(true);
  });

  it("fails validation for a completely invalid data set", async () => {
    const schema = getFormSchema();
    const invalidData = {
      name: "john",
      email: "invalid",
      age: -5,
      gender: "unknown",
      isAgree: false,
      photo: new File([], "test.gif", { type: "image/gif" }),
      country: "Atlantis",
      password: "weak",
      confirmPassword: "mismatch",
    };
    const isValid = await schema.isValid(invalidData);
    expect(isValid).toBe(false);
  });
});
