import { describe, it, expect, vi } from "vitest";
import getBase64_byBlob from "./getBase64_byBlob";

describe("getBase64_byBlob", () => {
  it("converts blob to base64 string", async () => {
    const blob = new Blob(["hello"], { type: "text/plain" });
    const result = await getBase64_byBlob(blob);
    expect(result).toMatch(/^data:text\/plain;base64,/);
    expect(result).toContain(btoa("hello"));
  });

  it("rejects when FileReader fails", async () => {
    const blob = new Blob(["test"]);
    const mockError = new Error("File read error");

    vi.spyOn(FileReader.prototype, "readAsDataURL").mockImplementation(
      function (this: FileReader) {
        if (this.onerror) {
          this.onerror(new ProgressEvent("error") as ProgressEvent<FileReader>);
        }
        if (this.error === undefined) {
          Object.defineProperty(this, "error", { value: mockError });
        }
      },
    );

    await expect(getBase64_byBlob(blob)).rejects.toThrow("File read error");
  });

  it("rejects when FileReader result is not a string", async () => {
    const blob = new Blob(["test"]);

    vi.spyOn(FileReader.prototype, "readAsDataURL").mockImplementation(
      function (this: FileReader) {
        Object.defineProperty(this, "result", {
          value: new ArrayBuffer(8),
          configurable: true,
        });

        this.onloadend?.(
          new ProgressEvent("loadend") as ProgressEvent<FileReader>,
        );
      },
    );

    await expect(getBase64_byBlob(blob)).rejects.toThrow(
      "Failed to convert blob to base64: result is not a string",
    );
  });
});
