"use client";

import { useEffect, useState } from "react";

const PETAL_COUNT = 18;

export function Petals() {
  const [petals, setPetals] = useState<
    { id: number; left: number; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 10,
        size: 8 + Math.random() * 12,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal absolute rounded-full"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size * 1.4,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            background: `linear-gradient(135deg, rgba(201,162,39,0.6), rgba(101,26,40,0.4))`,
            borderRadius: "50% 0 50% 50%",
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}
