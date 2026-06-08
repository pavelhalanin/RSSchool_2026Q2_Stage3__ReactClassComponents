import { describe, it, expect, vi } from "vitest";
import COUNTRY_TEST from "./COUNTRY_TEST";

vi.mock("./../const/country.json", () => ({
  default: [
    { name: "Belarus", code: "BY" },
    { name: "United States", code: "US" },
    { name: "Ukraine", code: "UA" },
  ],
}));

describe("COUNTRY_TEST", () => {
  it("requires a value", async () => {
    await expect(COUNTRY_TEST.validate(undefined)).rejects.toThrow();
    await expect(COUNTRY_TEST.validate(null)).rejects.toThrow();
    await expect(COUNTRY_TEST.validate("")).rejects.toThrow();
  });

  it("passes when value matches a country name from the list", async () => {
    await expect(COUNTRY_TEST.validate("Belarus")).resolves.toBe("Belarus");
    await expect(COUNTRY_TEST.validate("United States")).resolves.toBe(
      "United States",
    );
  });

  it("fails when value is not a valid country name", async () => {
    await expect(COUNTRY_TEST.validate("InvalidCountry")).rejects.toThrow(
      "Value need include country name",
    );
    await expect(COUNTRY_TEST.validate("Russia")).rejects.toThrow(
      "Value need include country name",
    );
  });
});
