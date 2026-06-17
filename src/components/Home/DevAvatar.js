import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { useI18n } from "../../i18n/I18nContext";

function DevAvatar() {
  const { t } = useI18n();
  const [hovered, setHovered] = useState(false);

  return (
    <Tilt
      tiltMaxAngleX={hovered ? 0 : 15}
      tiltMaxAngleY={hovered ? 0 : 15}
      perspective={1000}
      transitionSpeed={hovered ? 1500 : 400}
      scale={hovered ? 1 : 1.02}
    >
      <div
        className="dev-avatar"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="img"
        aria-label={t("aria.devAvatar")}
      >
        <svg width="320" height="320" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bgGrad" cx="50%" cy="35%" r="70%">
              <stop offset="0%" stop-color="#1c2f5c"/>
              <stop offset="55%" stop-color="#0f1a38"/>
              <stop offset="100%" stop-color="#070d1f"/>
            </radialGradient>
            <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f5c8a0"/>
              <stop offset="100%" stop-color="#d89868"/>
            </linearGradient>
            <linearGradient id="skinDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#e0a878"/>
              <stop offset="100%" stop-color="#b07848"/>
            </linearGradient>
            <linearGradient id="hair" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#2a1a10"/>
              <stop offset="100%" stop-color="#0e0805"/>
            </linearGradient>
            <linearGradient id="hoodie" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#7c5dd8"/>
              <stop offset="50%" stop-color="#5a3fb0"/>
              <stop offset="100%" stop-color="#3a2878"/>
            </linearGradient>
            <linearGradient id="hoodieDark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#3a2878"/>
              <stop offset="100%" stop-color="#1f1648"/>
            </linearGradient>
            <linearGradient id="pants" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#2a3a5e"/>
              <stop offset="100%" stop-color="#15203c"/>
            </linearGradient>
            <linearGradient id="desk" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#3a2a1c"/>
              <stop offset="100%" stop-color="#1f1408"/>
            </linearGradient>
            <linearGradient id="laptopBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#dfe3ea"/>
              <stop offset="100%" stop-color="#9aa3b0"/>
            </linearGradient>
            <linearGradient id="laptopLidBack" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#e8ecf2"/>
              <stop offset="100%" stop-color="#a8b0bc"/>
            </linearGradient>
            <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0a1230"/>
              <stop offset="100%" stop-color="#050918"/>
            </linearGradient>
            <linearGradient id="macBookLid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#d4d8e0"/>
              <stop offset="50%" stop-color="#b8bfca"/>
              <stop offset="100%" stop-color="#8a93a3"/>
            </linearGradient>
            <radialGradient id="appleLogo" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stop-color="#e8ecf2"/>
              <stop offset="60%" stop-color="#b8bfca"/>
              <stop offset="100%" stop-color="#7a8492"/>
            </radialGradient>
            <linearGradient id="chair" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1a2540"/>
              <stop offset="100%" stop-color="#0a1228"/>
            </linearGradient>
            <linearGradient id="headphone" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#3a455a"/>
              <stop offset="100%" stop-color="#1a2030"/>
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="screenGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="bigGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="14"/>
            </filter>
            <filter id="bodyShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000" flood-opacity="0.4"/>
            </filter>
          </defs>

          {/* ============ AMBIENT BG ============ */}
          <circle cx="160" cy="160" r="158" fill="url(#bgGrad)"/>
          <g className="ambient-halo">
            <ellipse cx="160" cy="180" rx="100" ry="80" fill="#5b8def" opacity="0.15" filter="url(#bigGlow)"/>
            <ellipse cx="160" cy="170" rx="60" ry="50" fill="#a78bfa" opacity="0.2" filter="url(#bigGlow)"/>
          </g>
          <ellipse cx="160" cy="290" rx="120" ry="8" fill="#000" opacity="0.3"/>

          {/* ============ SCENE (hidden on hover) ============ */}
          <g className="scene">
            <g className="chair-back">
              <path d="M 95 145 Q 90 90 130 75 L 175 75 Q 215 90 210 145 L 210 195 L 95 195 Z" fill="url(#chair)" stroke="#0a1530" strokeWidth="1.5"/>
              <path d="M 105 145 Q 102 100 135 85 L 152 85 L 152 190 L 105 190 Z" fill="#243660" opacity="0.5"/>
              <ellipse cx="152" cy="78" rx="28" ry="10" fill="url(#chair)" stroke="#0a1530" strokeWidth="1.2"/>
            </g>

            <g className="legs">
              <path d="M 115 230 Q 110 255 118 285 L 155 285 Q 158 260 152 230 Z" fill="url(#pants)" stroke="#0a1228" strokeWidth="1"/>
              <path d="M 155 230 Q 160 255 165 285 L 195 285 Q 200 260 192 230 Z" fill="#15203c" stroke="#0a1228" strokeWidth="1"/>
              <ellipse cx="135" cy="260" rx="14" ry="8" fill="#3a4a6e" opacity="0.5"/>
            </g>

            <g className="torso" filter="url(#bodyShadow)">
              <path d="M 95 150 Q 92 145 100 138 L 130 130 Q 150 145 175 130 L 205 138 Q 213 145 210 150 L 215 235 Q 213 240 205 240 L 100 240 Q 92 240 90 235 Z" fill="url(#hoodie)" stroke="#1f1648" strokeWidth="1.2"/>
              <path d="M 175 130 L 205 138 Q 213 145 210 150 L 215 235 Q 213 240 205 240 L 152 240 L 152 130 Z" fill="url(#hoodieDark)" opacity="0.55"/>
              <path d="M 120 195 L 185 195 L 180 230 Q 152 235 125 230 Z" fill="#3a2878" opacity="0.7" stroke="#1f1648" strokeWidth="0.8"/>
              <path d="M 110 135 Q 100 110 130 95 Q 152 90 175 95 Q 205 110 195 135 Q 175 125 152 125 Q 130 125 110 135 Z" fill="url(#hoodie)" stroke="#1f1648" strokeWidth="1.2"/>
              <path d="M 130 130 Q 152 138 175 130 L 175 140 Q 152 148 130 140 Z" fill="#1f1648"/>
              <line x1="142" y1="140" x2="138" y2="180" stroke="#1f1648" strokeWidth="2" strokeLinecap="round"/>
              <line x1="163" y1="140" x2="167" y2="180" stroke="#1f1648" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="138" cy="182" r="2.5" fill="#a78bfa"/>
              <circle cx="167" cy="182" r="2.5" fill="#a78bfa"/>
            </g>

            <g className="arm-left">
              <path d="M 95 150 Q 80 165 70 195 Q 68 210 78 220 L 100 215 Q 105 195 110 175 L 110 155 Z" fill="url(#hoodie)" stroke="#1f1648" strokeWidth="1"/>
              <path d="M 78 215 Q 80 230 95 240 L 130 240 L 132 225 L 100 220 Z" fill="url(#hoodie)" stroke="#1f1648" strokeWidth="1"/>
              <ellipse cx="125" cy="240" rx="14" ry="8" fill="url(#skin)" stroke="#a07040" strokeWidth="0.8"/>
              <g transform="translate(125 240)">
                <ellipse cx="-8" cy="2" rx="2" ry="3" fill="url(#skinDark)">
                  <animate attributeName="cy" values="2;-1;2" dur="0.4s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="-3" cy="2" rx="2" ry="3" fill="url(#skinDark)">
                  <animate attributeName="cy" values="2;-1;2" dur="0.4s" begin="0.1s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="2" cy="2" rx="2" ry="3" fill="url(#skinDark)">
                  <animate attributeName="cy" values="2;-1;2" dur="0.4s" begin="0.2s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="7" cy="2" rx="2" ry="3" fill="url(#skinDark)">
                  <animate attributeName="cy" values="2;-1;2" dur="0.4s" begin="0.3s" repeatCount="indefinite"/>
                </ellipse>
              </g>
            </g>

            <g className="arm-right">
              <path d="M 210 150 Q 225 165 235 195 Q 237 210 227 220 L 205 215 Q 200 195 195 175 L 195 155 Z" fill="url(#hoodieDark)" stroke="#1f1648" strokeWidth="1"/>
              <path d="M 227 215 Q 225 230 210 240 L 175 240 L 173 225 L 205 220 Z" fill="url(#hoodie)" stroke="#1f1648" strokeWidth="1"/>
              <ellipse cx="180" cy="240" rx="14" ry="8" fill="url(#skin)" stroke="#a07040" strokeWidth="0.8"/>
              <g transform="translate(180 240)">
                <ellipse cx="-7" cy="2" rx="2" ry="3" fill="url(#skinDark)">
                  <animate attributeName="cy" values="2;-1;2" dur="0.4s" begin="0.15s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="-2" cy="2" rx="2" ry="3" fill="url(#skinDark)">
                  <animate attributeName="cy" values="2;-1;2" dur="0.4s" begin="0.25s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="3" cy="2" rx="2" ry="3" fill="url(#skinDark)">
                  <animate attributeName="cy" values="2;-1;2" dur="0.4s" begin="0.05s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="8" cy="2" rx="2" ry="3" fill="url(#skinDark)">
                  <animate attributeName="cy" values="2;-1;2" dur="0.4s" begin="0.35s" repeatCount="indefinite"/>
                </ellipse>
              </g>
            </g>

            <g className="head">
              {/* Neck */}
              <rect x="142" y="118" width="20" height="18" fill="url(#skinDark)"/>
              <rect x="142" y="128" width="20" height="6" fill="#d89868" opacity="0.3"/>

              {/* Face base — slightly more defined jawline */}
              <ellipse cx="152" cy="98" rx="32" ry="38" fill="url(#skin)" stroke="#d89868" strokeWidth="0.6"/>

              {/* Face shadow on right side (depth) */}
              <path d="M 152 60 Q 184 60 184 96 Q 184 122 156 132 Q 174 122 174 96 Q 174 70 152 68 Z" fill="url(#skinDark)" opacity="0.18"/>

              {/* Cheekbone highlight (left side, light source) */}
              <ellipse cx="134" cy="100" rx="6" ry="10" fill="#fde0c0" opacity="0.4"/>
              {/* Jaw shadow */}
              <ellipse cx="152" cy="120" rx="22" ry="4" fill="#d89868" opacity="0.2"/>

              {/* === HAIR — Korean layered wavy style (covers down to eyebrows y=88) === */}
              {/* ONE solid hair silhouette — fringe drops to y=88, fully covers forehead */}
              <path
                d="M 110 105
                   Q 104 42 152 40
                   Q 200 42 194 105
                   L 194 128
                   Q 196 134 184 134
                   L 182 128
                   Q 188 118 186 106
                   Q 186 94 184 90
                   L 120 90
                   Q 118 94 118 106
                   Q 116 118 122 128
                   L 120 134
                   Q 108 134 110 128
                   L 110 105 Z"
                fill="url(#hair)"/>

              {/* Darker crown (depth on top) */}
              <path
                d="M 114 78 Q 110 50 152 48 Q 194 50 190 78 L 188 84 Q 184 62 152 60 Q 120 62 116 84 Z"
                fill="#1a0d08" opacity="0.55"/>

              {/* Wavy fringe (darker, drops to eyebrow level) */}
              <path
                d="M 120 88
                   Q 130 94 140 90
                   Q 152 96 162 90
                   Q 172 94 184 88
                   Q 182 96 172 94
                   Q 162 98 150 94
                   Q 138 98 128 94
                   Q 118 96 120 88 Z"
                fill="#1a0d08"/>

              {/* Top crown texture waves (highlight bumps) */}
              <path d="M 122 54 Q 132 46 146 52 Q 152 44 160 52 Q 172 46 180 58 Q 174 52 166 54 Q 158 48 150 54 Q 138 50 128 56 Z" fill="#0a0503" opacity="0.7"/>

              {/* Individual wavy strand highlights (curly texture) */}
              <g stroke="#5a4030" strokeWidth="0.6" fill="none" strokeLinecap="round" opacity="0.7">
                <path d="M 130 52 Q 134 58 132 66"/>
                <path d="M 142 48 Q 146 56 144 64"/>
                <path d="M 156 48 Q 160 56 158 64"/>
                <path d="M 170 52 Q 174 58 172 66"/>
                <path d="M 112 100 Q 108 116 112 128"/>
                <path d="M 192 100 Q 196 116 192 128"/>
              </g>

              {/* Top crown shine */}
              <ellipse cx="148" cy="50" rx="20" ry="3" fill="#5a4030" opacity="0.3"/>

              {/* === EYEBROWS — thicker, more defined === */}
              <path d="M 130 88 Q 137 85 145 87 Q 144 89 137 89 Q 132 89 130 88 Z" fill="#1a0d08"/>
              <path d="M 159 87 Q 167 85 174 88 Q 172 89 167 89 Q 160 89 159 87 Z" fill="#1a0d08"/>

              {/* === GLASSES (kept, programmer look) === */}
              <rect x="127" y="92" width="20" height="15" rx="5" fill="rgba(91,141,239,0.12)" stroke="#5b8def" strokeWidth="1.4"/>
              <rect x="157" y="92" width="20" height="15" rx="5" fill="rgba(91,141,239,0.12)" stroke="#5b8def" strokeWidth="1.4"/>
              <line x1="147" y1="99" x2="157" y2="99" stroke="#5b8def" strokeWidth="1.4"/>
              <line x1="127" y1="99" x2="121" y2="101" stroke="#5b8def" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="177" y1="99" x2="183" y2="101" stroke="#5b8def" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="130" y1="94" x2="135" y2="94" stroke="white" strokeWidth="0.8" opacity="0.6" strokeLinecap="round"/>
              <line x1="160" y1="94" x2="165" y2="94" stroke="white" strokeWidth="0.8" opacity="0.6" strokeLinecap="round"/>

              {/* === EYES — bigger, more attractive === */}
              {/* Eye whites (with slight shadow at top) */}
              <ellipse cx="137" cy="100" rx="7" ry="6" fill="white"/>
              <ellipse cx="167" cy="100" rx="7" ry="6" fill="white"/>
              {/* Upper eyelid crease */}
              <path d="M 130 97 Q 137 93 144 97" stroke="#1a0d08" strokeWidth="0.8" fill="none" opacity="0.6"/>
              <path d="M 160 97 Q 167 93 174 97" stroke="#1a0d08" strokeWidth="0.8" fill="none" opacity="0.6"/>
              {/* Iris (warm brown) */}
              <circle cx="138" cy="101" r="4.2" fill="#3a2010"/>
              <circle cx="168" cy="101" r="4.2" fill="#3a2010"/>
              <circle cx="138" cy="101" r="3" fill="#5a3018"/>
              <circle cx="168" cy="101" r="3" fill="#5a3018"/>
              {/* Pupil */}
              <circle cx="138" cy="101" r="1.8" fill="#0a0806"/>
              <circle cx="168" cy="101" r="1.8" fill="#0a0806"/>
              {/* Catchlight (main highlight) */}
              <circle cx="139.5" cy="99.5" r="1.5" fill="white"/>
              <circle cx="169.5" cy="99.5" r="1.5" fill="white"/>
              {/* Secondary catchlight */}
              <circle cx="136" cy="103" r="0.7" fill="white" opacity="0.6"/>
              <circle cx="166" cy="103" r="0.7" fill="white" opacity="0.6"/>
              {/* Lower lash line */}
              <path d="M 132 104 Q 137 106 143 104" stroke="#1a0d08" strokeWidth="0.4" fill="none" opacity="0.5"/>

              {/* === NOSE — defined, with shadow === */}
              <path d="M 152 104 L 150 113 Q 149 115 152 115 Q 155 115 154 113 Z" fill="url(#skinDark)" opacity="0.5"/>
              <path d="M 150 113 Q 152 115 154 113" stroke="#c89070" strokeWidth="0.6" fill="none" opacity="0.7"/>
              {/* Nose bridge highlight */}
              <path d="M 152 96 L 152 105" stroke="#fde0c0" strokeWidth="0.8" opacity="0.5" strokeLinecap="round"/>

              {/* === LIPS — fuller, more defined === */}
              {/* Upper lip */}
              <path d="M 144 121 Q 148 119 152 121 Q 156 119 160 121 Q 156 122 152 122 Q 148 122 144 121 Z" fill="#c85060" opacity="0.85"/>
              {/* Lower lip (fuller) */}
              <path d="M 144 122 Q 148 125 152 125 Q 156 125 160 122 Q 156 124 152 124 Q 148 124 144 122 Z" fill="#d86070" opacity="0.85"/>
              {/* Lip highlight */}
              <path d="M 149 122.5 Q 152 122 155 122.5" stroke="#fde0c0" strokeWidth="0.4" fill="none" opacity="0.7"/>
              {/* Lip line */}
              <path d="M 144 121.5 Q 152 122.5 160 121.5" stroke="#8a3040" strokeWidth="0.5" fill="none" opacity="0.6"/>

              {/* === CHIN/JAW definition === */}
              <path d="M 148 128 Q 152 130 156 128" stroke="#c89070" strokeWidth="0.5" fill="none" opacity="0.5"/>

              {/* === BLUSH === */}
              <ellipse cx="132" cy="113" rx="5" ry="3" fill="#ff9070" opacity="0.2"/>
              <ellipse cx="172" cy="113" rx="5" ry="3" fill="#ff9070" opacity="0.2"/>

              {/* === SUBTLE STUBBLE (handsome touch) === */}
              <ellipse cx="152" cy="125" rx="14" ry="5" fill="#3a2010" opacity="0.08"/>
            </g>

            <g className="headphones">
            </g>

            <g className="desk">
              <path d="M 30 240 L 290 240 L 285 252 L 35 252 Z" fill="url(#desk)" stroke="#0a0805" strokeWidth="1"/>
              <path d="M 30 240 L 290 240 L 285 242 L 35 242 Z" fill="#5a3a20" opacity="0.6"/>
            </g>

            <g className="coffee">
              {/* === CUP === */}
              {/* Cup body (ceramic, purple to match hoodie) */}
              <path d="M 245 222 L 248 240 L 270 240 L 273 222 Z" fill="#5a3fb0" stroke="#1f1648" strokeWidth="1"/>
              {/* Cup inner highlight */}
              <path d="M 247 224 L 249 238 L 252 238 L 250 224 Z" fill="#7c5dd8" opacity="0.5"/>

              {/* Cup rim (top ellipse) */}
              <ellipse cx="259" cy="222" rx="14" ry="3" fill="#5a3fb0" stroke="#1f1648" strokeWidth="1"/>
              <ellipse cx="259" cy="222" rx="14" ry="3" fill="none" stroke="#7c5dd8" strokeWidth="0.5" opacity="0.6"/>

              {/* Coffee surface (dark) */}
              <ellipse cx="259" cy="222" rx="11" ry="2" fill="#1a0f00"/>
              <ellipse cx="259" cy="222" rx="11" ry="2" fill="none" stroke="#3a1f00" strokeWidth="0.3"/>

              {/* Tiny crema swirl on coffee */}
              <path d="M 252 222 Q 256 220 260 222 Q 264 224 266 222" stroke="#8a4a20" strokeWidth="0.4" fill="none" opacity="0.7"/>

              {/* Cup handle */}
              <path d="M 273 226 Q 282 226 282 232 Q 282 238 272 238" stroke="#3a2878" strokeWidth="2.5" fill="none"/>
              <path d="M 273 228 Q 280 228 280 232 Q 280 236 272 236" stroke="#5a3fb0" strokeWidth="1" fill="none" opacity="0.6"/>

              {/* === STEAM (3 wisps, swirling upward, animated) === */}
              <g stroke="#5b8def" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.7">
                {/* Wisp 1 - left */}
                <path d="M 254 218 Q 250 210 254 202 Q 258 194 252 186">
                  <animate attributeName="opacity" values="0;0.7;0" dur="2.4s" repeatCount="indefinite"/>
                  <animate attributeName="d"
                    values="M 254 218 Q 250 210 254 202 Q 258 194 252 186;
                            M 254 218 Q 258 210 254 202 Q 250 194 254 186;
                            M 254 218 Q 250 210 254 202 Q 258 194 252 186"
                    dur="3s" repeatCount="indefinite"/>
                </path>

                {/* Wisp 2 - center (taller) */}
                <path d="M 259 218 Q 263 208 259 198 Q 255 188 261 178 Q 265 170 259 162">
                  <animate attributeName="opacity" values="0;0.8;0" dur="2.4s" begin="-0.8s" repeatCount="indefinite"/>
                  <animate attributeName="d"
                    values="M 259 218 Q 263 208 259 198 Q 255 188 261 178 Q 265 170 259 162;
                            M 259 218 Q 255 208 259 198 Q 263 188 257 178 Q 253 170 259 162;
                            M 259 218 Q 263 208 259 198 Q 255 188 261 178 Q 265 170 259 162"
                    dur="3.5s" repeatCount="indefinite"/>
                </path>

                {/* Wisp 3 - right */}
                <path d="M 264 218 Q 268 212 264 204 Q 260 196 266 188">
                  <animate attributeName="opacity" values="0;0.6;0" dur="2.4s" begin="-1.5s" repeatCount="indefinite"/>
                  <animate attributeName="d"
                    values="M 264 218 Q 268 212 264 204 Q 260 196 266 188;
                            M 264 218 Q 260 212 264 204 Q 268 196 262 188;
                            M 264 218 Q 268 212 264 204 Q 260 196 266 188"
                    dur="2.8s" repeatCount="indefinite"/>
                </path>
              </g>
            </g>

            <g className="code-particles" fontFamily="'Courier New', monospace" fontSize="8" opacity="0.6">
              <text x="40" y="80" fill="#5b8def">{ }
                <animate attributeName="y" values="80;70;80" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
              </text>
              <text x="270" y="100" fill="#a78bfa">&lt;/&gt;
                <animate attributeName="y" values="100;90;100" dur="3.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite"/>
              </text>
              <text x="55" y="180" fill="#86efac">( )
                <animate attributeName="y" values="180;172;180" dur="2.8s" repeatCount="indefinite"/>
              </text>
              <text x="265" y="200" fill="#7dd3fc">=&gt;
                <animate attributeName="y" values="200;192;200" dur="3.2s" repeatCount="indefinite"/>
              </text>
            </g>
          </g>

          {/* ============ MACBOOK (closed lid facing viewer) ============ */}
          <g className="laptop" style={{ transform: "translate(160px, 238px)" }}>
            {/* === LID BACK (outer face — facing viewer, shows Apple logo) === */}
            <path d="M -35 0 L 35 0 L 42 -50 L -42 -50 Z"
                  fill="url(#macBookLid)" stroke="#4a5460" strokeWidth="1.2"/>

            {/* Subtle inner bezel highlight */}
            <path d="M -32 -3 L 32 -3 L 39 -47 L -39 -47 Z"
                  fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>

            {/* === APPLE LOGO (official MacBook silhouette) === */}
            <g transform="translate(0 -25)">
              <path
                d="M 7 -10
                   C 6 -11, 4 -12, 2 -12
                   C 0 -12, -2 -10, -4 -10
                   C -9 -10, -12 -6, -12 -1
                   C -12 6, -7 11, -3 11
                   C 0 11, 1 10, 3 10
                   C 5 10, 7 11, 9 11
                   C 13 11, 16 6, 16 0
                   C 16 -4, 13 -7, 10 -7
                   C 9 -7, 7 -6, 6 -6
                   C 5 -6, 4 -7, 2 -7
                   C 1 -7, 0 -6, 0 -4
                   C 0 -5, 1 -7, 2 -8
                   C 3 -9, 5 -10, 7 -10 Z"
                fill="url(#appleLogo)"
                opacity="0.9"
              />
              <path
                d="M 2 -11
                   C 3 -13, 5 -14, 7 -12
                   C 5 -11, 4 -11, 2 -11 Z"
                fill="url(#appleLogo)"
                opacity="0.9"
              />
            </g>

            {/* === BASE (visible thin slice at the bottom) === */}
            <path d="M -42 0 L 42 0 L 45 4 L -45 4 Z"
                  fill="url(#laptopBase)" stroke="#4a5460" strokeWidth="0.8"/>
            <path d="M -35 0 L 35 0 L 36 0.5 L -36 0.5 Z" fill="#3a4250" opacity="0.7"/>
          </g>

          {/* ============ NAME BANNER ============ */}
          <g className="name-banner" transform="translate(160 305)">
            <rect x="-78" y="-12" width="156" height="22" rx="11" fill="rgba(10, 20, 45, 0.9)" stroke="#a78bfa" strokeWidth="1.2" filter="url(#softGlow)"/>
            <text y="3" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" fontWeight="bold" fill="#e2e8f0" letterSpacing="0.5">
              &lt;Ho Sy Minh /&gt;
            </text>
          </g>
        </svg>
      </div>
    </Tilt>
  );
}

export default DevAvatar;
