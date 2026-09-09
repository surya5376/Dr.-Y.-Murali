"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface LungAnimationProps {
  interactive?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const LungAnimation: React.FC<LungAnimationProps> = ({
  interactive = true,
  className = "",
  size = "md",
}) => {
  const [breathPhase, setBreathPhase] = useState<"Inhaling" | "Exhaling">("Inhaling");
  const [mode, setMode] = useState<"normal" | "deep">("normal");

  useEffect(() => {
    const cycleTime = mode === "deep" ? 8000 : 6000;
    const halfCycle = cycleTime / 2;

    const interval = setInterval(() => {
      setBreathPhase((prev) => (prev === "Inhaling" ? "Exhaling" : "Inhaling"));
    }, halfCycle);

    return () => clearInterval(interval);
  }, [mode]);

  const scaleHeight = size === "sm" ? "h-64" : size === "lg" ? "h-96" : "h-72";

  return (
    <div className={`relative flex flex-col items-center justify-center w-full ${className}`}>
      {/* Respiratory Status Bar */}
      {interactive && (
        <div className="w-full flex items-center justify-between px-3 py-2 mb-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                breathPhase === "Inhaling" ? "bg-[#2D9C9C] shadow-[0_0_8px_#2D9C9C]" : "bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]"
              }`}
            />
            <span className="font-medium tracking-wide uppercase text-[11px]">
              Tidal State: <strong className="text-white">{breathPhase}</strong>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setMode("normal")}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                mode === "normal" ? "bg-[#2D9C9C] text-white" : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              Normal
            </button>
            <button
              type="button"
              onClick={() => setMode("deep")}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                mode === "deep" ? "bg-[#FF6B35] text-white" : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              Deep Breath
            </button>
          </div>
        </div>
      )}

      {/* Realistic 3D Human Lung Render with Synchronized Volumetric Respiration */}
      <div className={`relative w-full ${scaleHeight} flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#0b1b26] to-[#0e212e] p-2`}>
        <div
          className={`relative w-full h-full max-w-sm flex items-center justify-center transition-all ease-in-out ${
            mode === "deep" ? "duration-[4000ms]" : "duration-[3000ms]"
          }`}
          style={{
            transformOrigin: "center 30%",
            transform:
              breathPhase === "Inhaling"
                ? mode === "deep"
                  ? "scale(1.08) translateY(-4px)"
                  : "scale(1.04) translateY(-2px)"
                : "scale(0.97) translateY(2px)",
            filter: breathPhase === "Inhaling" ? "brightness(1.08) contrast(1.03)" : "brightness(0.96) contrast(1)",
          }}
        >
          {/* Realistic 3D Model Image */}
          <Image
            src="/images/realistic-3d-lungs.jpg"
            alt="3D medical render of human lungs with glowing bronchial tree"
            fill
            className="object-contain object-center drop-shadow-[0_10px_25px_rgba(45,156,156,0.3)] select-none pointer-events-none"
            sizes="(max-width: 768px) 100vw, 400px"
          />

          {/* Bioluminescent Airflow Glow Overlay */}
          <div
            className={`absolute inset-0 transition-opacity ease-in-out pointer-events-none ${
              mode === "deep" ? "duration-[4000ms]" : "duration-[3000ms]"
            } ${breathPhase === "Inhaling" ? "opacity-75" : "opacity-30"}`}
          >
            <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="250"
                y1="45"
                x2="250"
                y2="135"
                stroke="#5eead4"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-flow-dash"
              />
              <path
                d="M 250 135 Q 215 160, 185 200 Q 155 240, 140 290"
                stroke="#5eead4"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-flow-dash"
              />
              <path
                d="M 250 135 Q 285 160, 315 200 Q 345 240, 360 290"
                stroke="#5eead4"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-flow-dash"
              />
              <circle cx="185" cy="200" r="3.5" fill="#5eead4" className="animate-ping" opacity="0.6" />
              <circle cx="315" cy="200" r="3.5" fill="#5eead4" className="animate-ping" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Anatomical Information Labels */}
      {interactive && (
        <div className="w-full mt-2.5 grid grid-cols-2 gap-2 text-[11px] text-white/70">
          <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
            <span className="block font-semibold text-white">Right Lung</span>
            <span>3 Anatomical Lobes</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-center">
            <span className="block font-semibold text-white">Left Lung</span>
            <span>2 Lobes + Cardiac Notch</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LungAnimation;
