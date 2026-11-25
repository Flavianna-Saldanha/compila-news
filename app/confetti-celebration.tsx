"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

type WindowSize = {
  width: number;
  height: number;
};

export function ConfettiCelebration() {
  const [windowSize, setWindowSize] = useState<WindowSize | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      setIsActive(true);
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, [isActive]);

  if (!isActive || !windowSize) {
    return null;
  }

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={false}
      numberOfPieces={900}
      gravity={0.12}
      onConfettiComplete={() => {
        setIsActive(false);
      }}
    />
  );
}
