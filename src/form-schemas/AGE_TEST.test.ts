import { describe, it, expect } from "vitest";
import AGE_TEST from "./AGE_TEST";

describe("AGE_TEST", () => {
  it("fails with typeError when value is not a number", async () => {
    await expect(AGE_TEST.validate("abc")).rejects.toThrow(
      "Age must be specified",
    );
    await expect(AGE_TEST.validate(true)).rejects.toThrow(
      "Age must be specified",
    );
  });

  it("requires positive number", async () => {
    await expect(AGE_TEST.validate(-5)).rejects.toThrow(
      "must be a positive number",
    );
    await expect(AGE_TEST.validate(0)).rejects.toThrow(
      "must be a positive number",
    );
    await expect(AGE_TEST.validate(25)).resolves.toBe(25);
  });

  it("requires integer", async () => {
    await expect(AGE_TEST.validate(5.5)).rejects.toThrow("must be an integer");
    await expect(AGE_TEST.validate(10)).resolves.toBe(10);
  });

  it("passes for valid positive integer", async () => {
    const validAges = [1, 18, 99, 100];
    for (const age of validAges) {
      await expect(AGE_TEST.validate(age)).resolves.toBe(age);
    }
  });
});
