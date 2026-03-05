/** @type {import('tailwindcss').Config} */

// ============================================================
// BRAND COLOR PALETTES — Uncomment ONE palette below.
// The Filipino VA only needs to change which block is active.
// ============================================================

// 🌿 LANDSCAPING — Green (DEFAULT — currently active)
const brandColors = {
  50:  '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
  950: '#052e16',
};

// 🔧 PLUMBING — Blue
// const brandColors = {
//   50:  '#eff6ff',
//   100: '#dbeafe',
//   200: '#bfdbfe',
//   300: '#93c5fd',
//   400: '#60a5fa',
//   500: '#3b82f6',
//   600: '#2563eb',
//   700: '#1d4ed8',
//   800: '#1e40af',
//   900: '#1e3a8a',
//   950: '#172554',
// };

// ⚡ ELECTRICAL — Amber
// const brandColors = {
//   50:  '#fffbeb',
//   100: '#fef3c7',
//   200: '#fde68a',
//   300: '#fcd34d',
//   400: '#fbbf24',
//   500: '#f59e0b',
//   600: '#d97706',
//   700: '#b45309',
//   800: '#92400e',
//   900: '#78350f',
//   950: '#451a03',
// };

// 💇 SALON — Rose/Mauve
// const brandColors = {
//   50:  '#fff1f2',
//   100: '#ffe4e6',
//   200: '#fecdd3',
//   300: '#fda4af',
//   400: '#fb7185',
//   500: '#f43f5e',
//   600: '#e11d48',
//   700: '#be123c',
//   800: '#9f1239',
//   900: '#881337',
//   950: '#4c0519',
// };

// 🍷 RESTAURANT — Burgundy/Dark Red
// const brandColors = {
//   50:  '#fef2f2',
//   100: '#fee2e2',
//   200: '#fecaca',
//   300: '#fca5a5',
//   400: '#f87171',
//   500: '#ef4444',
//   600: '#dc2626',
//   700: '#b91c1c',
//   800: '#991b1b',
//   900: '#7f1d1d',
//   950: '#450a0a',
// };

// 🧹 CLEANING — Cyan/Light Blue
// const brandColors = {
//   50:  '#ecfeff',
//   100: '#cffafe',
//   200: '#a5f3fc',
//   300: '#67e8f9',
//   400: '#22d3ee',
//   500: '#06b6d4',
//   600: '#0891b2',
//   700: '#0e7490',
//   800: '#155e75',
//   900: '#164e63',
//   950: '#083344',
// };

// 🏗️ CONTRACTOR — Slate/Dark Gray
// const brandColors = {
//   50:  '#f8fafc',
//   100: '#f1f5f9',
//   200: '#e2e8f0',
//   300: '#cbd5e1',
//   400: '#94a3b8',
//   500: '#64748b',
//   600: '#475569',
//   700: '#334155',
//   800: '#1e293b',
//   900: '#0f172a',
//   950: '#020617',
// };

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: brandColors,
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
