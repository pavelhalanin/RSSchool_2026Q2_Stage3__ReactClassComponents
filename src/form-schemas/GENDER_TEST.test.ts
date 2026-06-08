import { describe, it, expect } from "vitest";
import GENDER_TEST from "./GENDER_TEST";

describe("GENDER_TEST", () => {
  it("requires a value", async () => {
    await expect(GENDER_TEST.validate(undefined)).rejects.toThrow();
    await expect(GENDER_TEST.validate(null)).rejects.toThrow();
    await expect(GENDER_TEST.validate("")).rejects.toThrow();
  });

  it('allows only "male", "female", or "other"', async () => {
    await expect(GENDER_TEST.validate("male")).resolves.toBe("male");
    await expect(GENDER_TEST.validate("female")).resolves.toBe("female");
    await expect(GENDER_TEST.validate("other")).resolves.toBe("other");
  });

  it("rejects invalid values", async () => {
    await expect(GENDER_TEST.validate("unknown")).rejects.toThrow();
    await expect(GENDER_TEST.validate("MALE")).rejects.toThrow();
    await expect(GENDER_TEST.validate("")).rejects.toThrow();
  });
});
