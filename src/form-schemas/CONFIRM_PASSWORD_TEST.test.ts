import { describe, it, expect } from "vitest";
import * as yup from "yup";
import CONFIRM_PASSWORD_TEST from "./CONFIRM_PASSWORD_TEST";

describe("CONFIRM_PASSWORD_TEST", () => {
  const schema = yup.object({
    password: yup.string().required(),
    confirmPassword: CONFIRM_PASSWORD_TEST,
  });

  it("requires a value", async () => {
    await expect(schema.validate({ password: "pass123" })).rejects.toThrow();
    await expect(
      schema.validate({ password: "pass123", confirmPassword: undefined }),
    ).rejects.toThrow();
    await expect(
      schema.validate({ password: "pass123", confirmPassword: null }),
    ).rejects.toThrow();
    await expect(
      schema.validate({ password: "pass123", confirmPassword: "" }),
    ).rejects.toThrow();
  });

  it("passes when confirmPassword matches password", async () => {
    const data = {
      password: "MyPass123!",
      confirmPassword: "MyPass123!",
    };
    await expect(schema.validate(data)).resolves.toEqual(data);
  });

  it("fails when confirmPassword does not match password", async () => {
    const data = {
      password: "MyPass123!",
      confirmPassword: "DifferentPass",
    };
    await expect(schema.validate(data)).rejects.toThrow(
      "The password is not equals",
    );
  });

  it("fails when password field is missing (ref returns undefined)", async () => {
    const onlyConfirmSchema = yup.object({
      confirmPassword: CONFIRM_PASSWORD_TEST,
    });
    const data = { confirmPassword: "something" };
    await expect(onlyConfirmSchema.validate(data)).rejects.toThrow(
      "The password is not equals",
    );
  });
});
