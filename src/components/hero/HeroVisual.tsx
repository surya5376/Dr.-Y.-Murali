"use client";

import React from "react";
import Image from "next/image";

interface HeroVisualProps {
  className?: string;
  priority?: boolean;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ className = "", priority = true }) => {
  return (
    <div
      className={`group relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] mx-auto flex items-center justify-center select-none cursor-default ${className}`}
    >
      {/* 1. Luminous Atmospheric Radial Background (Seamless light gradient, zero dark boxes) */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,156,156,0.12)_0%,rgba(240,246,252,0.6)_45%,transparent_75%)] pointer-events-none transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.05)_0%,transparent_60%)] pointer-events-none" />

      {/* 2. 3D Anatomical Lung Visualization with Synchronized Tidal Respiration */}
      <div className="relative w-[90%] sm:w-[88%] aspect-square flex items-center justify-center">
        <div
          className="relative w-full h-full animate-breathe flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.015]"
          style={{
            transformOrigin: "center 32%",
            filter: "drop-shadow(0 18px 35px rgba(22, 52, 71, 0.09)) drop-shadow(0 4px 14px rgba(45, 156, 156, 0.08))",
          }}
        >
          {/* Base Realistic 3D Anatomical Lung Model */}
          <Image
            src="/images/hero-lungs-centered.png"
            alt="Human respiratory lungs anatomical model with detailed tracheobronchial arborization — Dr. Y. Murali Pulmonology Care"
            fill
            priority={priority}
            className="object-contain object-center pointer-events-none select-none"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 540px"
          />

          {/* 3. Delicate Synchronized Bronchial Airflow Overlay (follows anatomical branching) */}
          <div className="absolute inset-0 pointer-events-none overflow-visible mix-blend-screen opacity-70 group-hover:opacity-90 transition-opacity duration-500">
            <svg
              className="w-full h-full"
              viewBox="0 0 480 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="bronchialAirflowGrad" x1="240" y1="40" x2="240" y2="380" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2D9C9C" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#4DD0E1" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#2D9C9C" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="leftBranchGrad" x1="240" y1="178" x2="110" y2="360" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4DD0E1" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#2D9C9C" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2D9C9C" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="rightBranchGrad" x1="240" y1="178" x2="370" y2="360" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4DD0E1" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#2D9C9C" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2D9C9C" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              {/* Trachea Inspiratory Stream (Descending from larynx to carina) */}
              <path
                d="M 240 45 L 240 178"
                stroke="url(#bronchialAirflowGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-bronchial-flow"
              />
              <path
                d="M 235 60 L 235 174"
                stroke="#4DD0E1"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.4"
                className="animate-flow-slow"
              />
              <path
                d="M 245 60 L 245 174"
                stroke="#4DD0E1"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.4"
                className="animate-flow-slow"
              />

              {/* Carina Bifurcation & Left Primary Bronchial Tree */}
              <g>
                {/* Left Main Bronchus */}
                <path
                  d="M 240 178 Q 215 200, 185 225"
                  stroke="url(#leftBranchGrad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="animate-bronchial-flow"
                />
                {/* Left Superior Lobar Division */}
                <path
                  d="M 185 225 Q 160 215, 128 202"
                  stroke="url(#leftBranchGrad)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  className="animate-bronchial-flow"
                />
                <path
                  d="M 160 215 Q 145 185, 122 172"
                  stroke="url(#leftBranchGrad)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                  className="animate-flow-dash"
                />
                {/* Left Inferior Lobar Division */}
                <path
                  d="M 185 225 Q 170 270, 150 325"
                  stroke="url(#leftBranchGrad)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className="animate-bronchial-flow"
                />
                <path
                  d="M 150 325 Q 135 365, 125 390"
                  stroke="url(#leftBranchGrad)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  opacity="0.6"
                  className="animate-flow-slow"
                />
                <path
                  d="M 150 325 Q 170 365, 168 402"
                  stroke="url(#leftBranchGrad)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                  className="animate-flow-slow"
                />
              </g>

              {/* Carina Bifurcation & Right Primary Bronchial Tree */}
              <g>
                {/* Right Main Bronchus */}
                <path
                  d="M 240 178 Q 265 200, 295 225"
                  stroke="url(#rightBranchGrad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="animate-bronchial-flow"
                />
                {/* Right Superior Lobar Division */}
                <path
                  d="M 295 225 Q 320 215, 352 202"
                  stroke="url(#rightBranchGrad)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  className="animate-bronchial-flow"
                />
                <path
                  d="M 320 215 Q 335 185, 358 172"
                  stroke="url(#rightBranchGrad)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                  className="animate-flow-dash"
                />
                {/* Right Middle/Inferior Lobar Division */}
                <path
                  d="M 295 225 Q 310 270, 330 325"
                  stroke="url(#rightBranchGrad)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className="animate-bronchial-flow"
                />
                <path
                  d="M 330 325 Q 345 365, 355 390"
                  stroke="url(#rightBranchGrad)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  opacity="0.6"
                  className="animate-flow-slow"
                />
                <path
                  d="M 330 325 Q 310 365, 312 402"
                  stroke="url(#rightBranchGrad)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                  className="animate-flow-slow"
                />
              </g>

              {/* Microscopic Alveolar Gas Exchange Diffusion Micro-Points */}
              <circle cx="240" cy="178" r="2.5" fill="#4DD0E1" className="animate-alveolar-glow" />
              <circle cx="128" cy="202" r="2" fill="#2D9C9C" className="animate-alveolar-glow" />
              <circle cx="352" cy="202" r="2" fill="#2D9C9C" className="animate-alveolar-glow" />
              <circle cx="125" cy="390" r="2" fill="#2D9C9C" className="animate-alveolar-glow" />
              <circle cx="355" cy="390" r="2" fill="#2D9C9C" className="animate-alveolar-glow" />
              <circle cx="168" cy="402" r="1.8" fill="#4DD0E1" className="animate-alveolar-glow" />
              <circle cx="312" cy="402" r="1.8" fill="#4DD0E1" className="animate-alveolar-glow" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
