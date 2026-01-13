/**
 * Demogorgon Component
 * Personaje principal estilo Stranger Things
 * SVG amigable pero misterioso con cabeza de flor
 * Animaciones sutiles de respiración y glow
 */

import React from "react";
import styles from "../styles/Demogorgon.module.css";

const Demogorgon = () => {
  return (
    <div className={styles.demogorgonContainer}>
      {/* Glow effect behind */}
      <div className={styles.glowEffect}></div>

      <svg
        className={styles.demogorgon}
        viewBox="0 0 200 280"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Demogorgon - Personaje de Stranger Things"
      >
        {/* Definiciones de gradientes y filtros */}
        <defs>
          {/* Gradiente para el cuerpo */}
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d1a1a" />
            <stop offset="50%" stopColor="#2a0f0f" />
            <stop offset="100%" stopColor="#1a0505" />
          </linearGradient>

          {/* Gradiente para los pétalos */}
          <linearGradient
            id="petalGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8b2942" />
            <stop offset="50%" stopColor="#6b1d32" />
            <stop offset="100%" stopColor="#4a1222" />
          </linearGradient>

          {/* Gradiente interior de los pétalos */}
          <radialGradient id="petalInner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff4466" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4a1222" stopOpacity="0" />
          </radialGradient>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shadow filter */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="6"
              floodColor="#ff0033"
              floodOpacity="0.4"
            />
          </filter>
        </defs>

        {/* Cuerpo principal */}
        <g className={styles.body}>
          {/* Cuerpo base */}
          <ellipse
            cx="100"
            cy="200"
            rx="45"
            ry="70"
            fill="url(#bodyGradient)"
            filter="url(#shadow)"
          />

          {/* Textura del cuerpo */}
          <ellipse
            cx="100"
            cy="200"
            rx="40"
            ry="65"
            fill="none"
            stroke="#4a1a1a"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Brazos */}
          <g className={styles.arms}>
            {/* Brazo izquierdo */}
            <path
              d="M60 180 Q30 190 25 220 Q20 235 30 245"
              fill="none"
              stroke="url(#bodyGradient)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <circle cx="30" cy="245" r="6" fill="#2a0f0f" />

            {/* Brazo derecho */}
            <path
              d="M140 180 Q170 190 175 220 Q180 235 170 245"
              fill="none"
              stroke="url(#bodyGradient)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <circle cx="170" cy="245" r="6" fill="#2a0f0f" />
          </g>

          {/* Piernas */}
          <g className={styles.legs}>
            {/* Pierna izquierda */}
            <path
              d="M75 260 Q70 275 75 290"
              fill="none"
              stroke="url(#bodyGradient)"
              strokeWidth="14"
              strokeLinecap="round"
            />

            {/* Pierna derecha */}
            <path
              d="M125 260 Q130 275 125 290"
              fill="none"
              stroke="url(#bodyGradient)"
              strokeWidth="14"
              strokeLinecap="round"
            />
          </g>
        </g>

        {/* Cabeza de flor (pétalos) */}
        <g className={styles.flowerHead} filter="url(#glow)">
          {/* Pétalo superior */}
          <path
            className={styles.petal}
            d="M100 30 Q115 50 115 80 Q100 100 100 100 Q100 100 85 80 Q85 50 100 30"
            fill="url(#petalGradient)"
            style={{ "--petal-delay": "0s" }}
          />

          {/* Pétalo superior derecho */}
          <path
            className={styles.petal}
            d="M130 40 Q150 55 155 85 Q145 110 135 105 Q125 100 120 75 Q115 50 130 40"
            fill="url(#petalGradient)"
            style={{ "--petal-delay": "0.1s" }}
          />

          {/* Pétalo derecho */}
          <path
            className={styles.petal}
            d="M150 70 Q170 85 170 115 Q160 140 145 130 Q130 120 135 95 Q140 75 150 70"
            fill="url(#petalGradient)"
            style={{ "--petal-delay": "0.2s" }}
          />

          {/* Pétalo inferior derecho */}
          <path
            className={styles.petal}
            d="M155 105 Q175 125 165 155 Q150 175 135 160 Q120 145 135 125 Q150 110 155 105"
            fill="url(#petalGradient)"
            style={{ "--petal-delay": "0.3s" }}
          />

          {/* Pétalo inferior */}
          <path
            className={styles.petal}
            d="M140 140 Q155 165 140 190 Q120 200 105 180 Q95 160 115 145 Q130 135 140 140"
            fill="url(#petalGradient)"
            style={{ "--petal-delay": "0.4s" }}
          />

          {/* Pétalo inferior izquierdo */}
          <path
            className={styles.petal}
            d="M45 105 Q25 125 35 155 Q50 175 65 160 Q80 145 65 125 Q50 110 45 105"
            fill="url(#petalGradient)"
            style={{ "--petal-delay": "0.5s" }}
          />

          {/* Pétalo izquierdo */}
          <path
            className={styles.petal}
            d="M50 70 Q30 85 30 115 Q40 140 55 130 Q70 120 65 95 Q60 75 50 70"
            fill="url(#petalGradient)"
            style={{ "--petal-delay": "0.6s" }}
          />

          {/* Pétalo superior izquierdo */}
          <path
            className={styles.petal}
            d="M70 40 Q50 55 45 85 Q55 110 65 105 Q75 100 80 75 Q85 50 70 40"
            fill="url(#petalGradient)"
            style={{ "--petal-delay": "0.7s" }}
          />

          {/* Centro de la flor (boca) */}
          <circle
            cx="100"
            cy="115"
            r="30"
            fill="#1a0505"
            className={styles.mouth}
          />

          {/* Interior de la boca con efecto */}
          <circle cx="100" cy="115" r="20" fill="url(#petalInner)" />

          {/* Dientes pequeños (amigables) */}
          <g className={styles.teeth}>
            <polygon
              points="88,100 92,108 84,108"
              fill="#d4c4b4"
              opacity="0.8"
            />
            <polygon
              points="100,98 104,106 96,106"
              fill="#d4c4b4"
              opacity="0.8"
            />
            <polygon
              points="112,100 116,108 108,108"
              fill="#d4c4b4"
              opacity="0.8"
            />
            <polygon
              points="88,130 92,122 84,122"
              fill="#d4c4b4"
              opacity="0.8"
            />
            <polygon
              points="100,132 104,124 96,124"
              fill="#d4c4b4"
              opacity="0.8"
            />
            <polygon
              points="112,130 116,122 108,122"
              fill="#d4c4b4"
              opacity="0.8"
            />
          </g>
        </g>

        {/* Partículas flotantes */}
        <g className={styles.particles}>
          <circle cx="40" cy="60" r="2" fill="#ff4466" opacity="0.6">
            <animate
              attributeName="cy"
              values="60;50;60"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0.2;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="160" cy="80" r="1.5" fill="#ff6688" opacity="0.5">
            <animate
              attributeName="cy"
              values="80;70;80"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0.2;0.5"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="25" cy="150" r="2" fill="#ff4466" opacity="0.4">
            <animate
              attributeName="cy"
              values="150;140;150"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="175" cy="170" r="1.5" fill="#ff6688" opacity="0.5">
            <animate
              attributeName="cy"
              values="170;160;170"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default Demogorgon;
