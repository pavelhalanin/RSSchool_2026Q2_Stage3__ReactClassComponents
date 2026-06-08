import { describe, it, expect } from "vitest";
import PASSWORD_TEST from "./PASSWORD_TEST";

describe("PASSWORD_TEST", () => {
  it("requires a value", async () => {
    await expect(PASSWORD_TEST.validate(undefined)).rejects.toThrow();
    await expect(PASSWORD_TEST.validate(null)).rejects.toThrow();
    await expect(PASSWORD_TEST.validate("")).rejects.toThrow();
  });

  it("fails when missing a number", async () => {
    await expect(PASSWORD_TEST.validate("Abc!")).rejects.toThrow("1 number");
  });

  it("fails when missing an uppercase letter", async () => {
    await expect(PASSWORD_TEST.validate("abc123!")).rejects.toThrow(
      "1 uppercase",
    );
  });

  it("fails when missing a lowercase letter", async () => {
    await expect(PASSWORD_TEST.validate("ABC123!")).rejects.toThrow(
      "1 lowercase",
    );
  });

  it("fails when missing a special character", async () => {
    await expect(PASSWORD_TEST.validate("Abc123")).rejects.toThrow(
      "1 special character",
    );
  });

  it("passes when all requirements are met", async () => {
    const validPassword = "Abc123!";
    await expect(PASSWORD_TEST.validate(validPassword)).resolves.toBe(
      validPassword,
    );
  });

  it("passes with Cyrillic uppercase and lowercase", async () => {
    const cyrillicPassword = "ПрИвЕт123!";
    await expect(PASSWORD_TEST.validate(cyrillicPassword)).resolves.toBe(
      cyrillicPassword,
    );
  });
});
