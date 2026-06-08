import { describe, it, expect } from "vitest";
import usePasswordLevel from "./usePasswordLevel";

describe("usePasswordLevel", () => {
  it("returns false for all checks when password is empty", () => {
    const result = usePasswordLevel("");
    expect(result.hasNumber).toBe(false);
    expect(result.hasUppercase).toBe(false);
    expect(result.hasLowercase).toBe(false);
    expect(result.hasSpecialCharacter).toBe(false);
  });

  it("has number", () => {
    const result = usePasswordLevel("1");
    expect(result.hasNumber).toBe(true);
    expect(result.hasUppercase).toBe(false);
    expect(result.hasLowercase).toBe(false);
    expect(result.hasSpecialCharacter).toBe(false);
  });

  it("has uppercase", () => {
    const result = usePasswordLevel("A");
    expect(result.hasNumber).toBe(false);
    expect(result.hasUppercase).toBe(true);
    expect(result.hasLowercase).toBe(false);
    expect(result.hasSpecialCharacter).toBe(false);
  });

  it("has lowercase", () => {
    const result = usePasswordLevel("a");
    expect(result.hasNumber).toBe(false);
    expect(result.hasUppercase).toBe(false);
    expect(result.hasLowercase).toBe(true);
    expect(result.hasSpecialCharacter).toBe(false);
  });

  it("has lowercase", () => {
    const result = usePasswordLevel("@");
    expect(result.hasNumber).toBe(false);
    expect(result.hasUppercase).toBe(false);
    expect(result.hasLowercase).toBe(false);
    expect(result.hasSpecialCharacter).toBe(true);
  });

  it("hard password", () => {
    const result = usePasswordLevel("qQ1!");
    expect(result.hasNumber).toBe(true);
    expect(result.hasUppercase).toBe(true);
    expect(result.hasLowercase).toBe(true);
    expect(result.hasSpecialCharacter).toBe(true);
  });
});
