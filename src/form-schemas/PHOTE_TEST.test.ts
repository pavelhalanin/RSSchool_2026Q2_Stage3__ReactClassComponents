import { describe, it, expect } from "vitest";
import PHOTO_TEST from "./PHOTO_TEST";

describe("PHOTO_TEST", () => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  it("rejects falsy values (null, undefined, 0, false, empty string)", async () => {
    await expect(PHOTO_TEST.validate(null)).rejects.toThrow();
    await expect(PHOTO_TEST.validate(undefined)).rejects.toThrow();
    await expect(PHOTO_TEST.validate(0)).rejects.toThrow();
    await expect(PHOTO_TEST.validate(false)).rejects.toThrow();
    await expect(PHOTO_TEST.validate("")).rejects.toThrow();
  });

  it("rejects non-File values", async () => {
    await expect(PHOTO_TEST.validate("not a file")).rejects.toThrow();
    await expect(PHOTO_TEST.validate(123)).rejects.toThrow();
  });

  describe("file type validation", () => {
    it("accepts PNG and JPEG files", async () => {
      const pngFile = new File(["dummy"], "photo.png", { type: "image/png" });
      const jpegFile = new File(["dummy"], "photo.jpg", { type: "image/jpeg" });

      await expect(PHOTO_TEST.validate(pngFile)).resolves.toBe(pngFile);
      await expect(PHOTO_TEST.validate(jpegFile)).resolves.toBe(jpegFile);
    });

    it("rejects other file types", async () => {
      const gifFile = new File(["dummy"], "photo.gif", { type: "image/gif" });
      const txtFile = new File(["dummy"], "photo.txt", { type: "text/plain" });

      await expect(PHOTO_TEST.validate(gifFile)).rejects.toThrow(
        "File extensions available are .png and .jpeg.",
      );
      await expect(PHOTO_TEST.validate(txtFile)).rejects.toThrow(
        "File extensions available are .png and .jpeg.",
      );
    });
  });

  describe("file size validation", () => {
    it("accepts files smaller than or equal to 5MB", async () => {
      const smallFile = new File(["a".repeat(1024 * 1024)], "small.png", {
        type: "image/png",
      });
      const exactFile = new File(["a".repeat(MAX_FILE_SIZE)], "exact.png", {
        type: "image/png",
      });

      await expect(PHOTO_TEST.validate(smallFile)).resolves.toBe(smallFile);
      await expect(PHOTO_TEST.validate(exactFile)).resolves.toBe(exactFile);
    });

    it("rejects files larger than 5MB", async () => {
      const largeFile = new File(["a".repeat(MAX_FILE_SIZE + 1)], "large.png", {
        type: "image/png",
      });

      await expect(PHOTO_TEST.validate(largeFile)).rejects.toThrow(
        `Maximum file size is ${MAX_FILE_SIZE} bytes`,
      );
    });
  });
});
