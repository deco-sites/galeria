import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        'archivo': ["Archivo", "sans-serif"],
        'helvetica': ["Helvetica", "sans-serif"]
      },
      fontSize: {
        '6vw': '6vw',
        '4.5vw': '4.5vw',
        'dynamic': 'calc(19px + 1.5vw)',
        'title-carousel': 'calc(19px + 0.6vw)',
        'responsive': 'calc(18px + 0.1vw)',
        'dynamic-base': 'calc(16px + 0.3vw);',
        'dynamic-work': 'calc(17px + 0.1vw);',
        'clamp': 'clamp(34px, 3.2vw, 62px)',
      },
      colors: {
        'gray': "#BFBFBF",
        'gray-light': "#b9b9b9",
        'gray-lighter': "#999",
        'gray-lighter-footer': "#888",
        'gray-border': "rgb(255 255 255 / 40%)",
        'dark-charcoal': "#212121",
      },
      lineHeight: {
        'tight-0.95': "0.95",
        'tight-1': "1px",
        'tight-1.2': "1.2px",
        'tight-1.36': "-1.36px",
        'tight-1.5': "1.5px",
        'tight-1.9': "1.9px",
        'tight-22': "22.4px",
        'tight-25': "25.29px",
        'tight-28': "28px",
        'tight-36': "36.4px",
        'tight-60': "60px",
      },
      letterSpacing: {
        'tight-1.36': "-1.36px",
        'tight-1': "-1.9px",
        'tight-0.1': "1px",
        'tight-2': "-2.36px",
      },
      opacity: {
        '7': '.7',
      },
      spacing: {
        '35rem': '35rem',
        'slide-height': '19rem',
        'slide-spacing': '1rem',
        'slide-size': '55%',
      },
      animation: {
        sliding: "sliding 30s linear infinite",
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
};