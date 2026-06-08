import { useEffect, useState } from "react";

export default function useTemporaryFlag(
  createdAt: number,
  duration = 4000,
): boolean {
  const [flag, setFlag] = useState(() => Date.now() - createdAt < duration);

  useEffect(() => {
    const age = Date.now() - createdAt;
    const timer = setTimeout(() => setFlag(false), duration - age);
    return () => clearTimeout(timer);
  }, [createdAt, duration]);

  return flag;
}
