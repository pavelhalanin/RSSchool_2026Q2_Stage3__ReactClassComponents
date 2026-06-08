import { describe, it, expect } from "vitest";
import getBlob_byFile from "./getBlob_byFile";

describe("getBlob_byFile", () => {
  it("returns empty blob when file is null", () => {
    const result = getBlob_byFile(null);
    expect(result).toBeInstanceOf(Blob);
    expect(result.size).toBe(0);
    expect(result.type).toBe("");
  });

  it("returns empty blob when file is undefined", () => {
    const result = getBlob_byFile(undefined);
    expect(result).toBeInstanceOf(Blob);
    expect(result.size).toBe(0);
    expect(result.type).toBe("");
  });

  it("returns blob with file content and correct type when file is provided", () => {
    const content = "test content";
    const file = new File([content], "test.txt", { type: "text/plain" });

    const result = getBlob_byFile(file);

    expect(result).toBeInstanceOf(Blob);
    expect(result.type).toBe("text/plain");
    expect(result.size).toBe(content.length);
  });

  it("preserves file data correctly", async () => {
    const content = "Hello, world!";
    const file = new File([content], "hello.txt", { type: "text/plain" });

    const blob = getBlob_byFile(file);
    const text = await blob.text();

    expect(text).toBe(content);
  });
});
