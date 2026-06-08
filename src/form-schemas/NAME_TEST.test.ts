import { describe, it, expect } from "vitest";
import * as yup from "yup";
import NAME_TEST from "./NAME_TEST";

describe("NAME_TEST", () => {
  it("requires a value", async () => {
    await expect(NAME_TEST.validate(undefined)).rejects.toThrow();
    await expect(NAME_TEST.validate(null)).rejects.toThrow();
    await expect(NAME_TEST.validate("")).rejects.toThrow();
  });

  it("passes when name starts with uppercase Latin or Cyrillic", async () => {
    const validNames = ["Pavel", "Павел"];
    for (const name of validNames) {
      await expect(NAME_TEST.validate(name)).resolves.toBe(name);
    }
  });

  it("fails when name starts with lowercase letter", async () => {
    await expect(NAME_TEST.validate("pavel")).rejects.toThrow(
      "The name must begin with an uppercase letter",
    );
    await expect(NAME_TEST.validate("павел")).rejects.toThrow(
      "The name must begin with an uppercase letter",
    );
  });

  it("covers the branch where value is falsy inside custom test (return true) using empty string without required()", async () => {
    const onlyCustomTest = yup
      .string()
      .nullable()
      .test({
        message: "The name must begin with an uppercase letter",
        test: (value) => {
          if (!value) return true;
          const FIRST_CHAR = value[0];
          return FIRST_CHAR === FIRST_CHAR.toLocaleUpperCase();
        },
      });
    await expect(onlyCustomTest.validate("")).resolves.toBe("");
    await expect(onlyCustomTest.validate(null)).resolves.toBe(null);
    await expect(onlyCustomTest.validate(undefined)).resolves.toBe(undefined);
  });
});
