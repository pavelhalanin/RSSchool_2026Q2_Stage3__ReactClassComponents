import { describe, it, expect } from "vitest";
import AGREE_FLAG_TEST from "./AGREE_FLAG_TEST";

describe("AGREE_FLAG_TEST", () => {
  it("requires a defined boolean value (not undefined or null)", async () => {
    await expect(AGREE_FLAG_TEST.validate(undefined)).rejects.toThrow();
    await expect(AGREE_FLAG_TEST.validate(null)).rejects.toThrow();
  });

  it("requires the value to be exactly true", async () => {
    await expect(AGREE_FLAG_TEST.validate(true)).resolves.toBe(true);
    await expect(AGREE_FLAG_TEST.validate(false)).rejects.toThrow(
      "You need agree",
    );
  });
});
