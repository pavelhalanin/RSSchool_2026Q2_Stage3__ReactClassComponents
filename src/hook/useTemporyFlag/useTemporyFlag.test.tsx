import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";

import useTemporaryFlag from "./useTemporyFlag";

describe("useTemporaryFlag", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-08T00:00:00.000Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns true when duration has not expired", () => {
    const now = Date.now();
    const createdAt = now - 1000;

    const { result } = renderHook(() => useTemporaryFlag(createdAt, 4000));

    expect(result.current).toBe(true);
  });

  it("becomes false after remaining duration", () => {
    const now = Date.now();
    const createdAt = now - 1000;

    const { result } = renderHook(() => useTemporaryFlag(createdAt, 4000));

    expect(result.current).toBe(true);

    act(() => {
      vi.advanceTimersByTime(2999);
    });

    expect(result.current).toBe(true);

    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(result.current).toBe(false);
  });

  it("returns false immediately when duration already expired", () => {
    const now = Date.now();
    const createdAt = now - 5000;

    const { result } = renderHook(() => useTemporaryFlag(createdAt, 4000));

    expect(result.current).toBe(false);
  });

  it("restarts timer when createdAt changes", () => {
    const now = Date.now();

    const { result, rerender } = renderHook(
      ({ createdAt }) => useTemporaryFlag(createdAt, 4000),
      {
        initialProps: {
          createdAt: now - 3500,
        },
      },
    );

    expect(result.current).toBe(true);

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe(false);

    rerender({
      createdAt: Date.now(),
    });

    expect(result.current).toBe(false);

    act(() => {
      vi.advanceTimersByTime(0);
    });

    expect(result.current).toBe(false);
  });
});
