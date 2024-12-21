import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        "1/2": "50%",
        37.5: "150px",
        64.5: "258px",
        69: "276px",
        150: "600px",
        320: "1280px",
      },
      spacing: {
        0.25: "1px",
        4.5: "18px",
        13: "52px",
        15: "60px",
        25: "100px",
        30: "120px",
        37.5: "150px",
        50: "200px",
        72.5: "290px",
        75.5: "302px",
        82: "328px",
        83.5: "334px",
        88.75: "355px",
        90: "360px",
        100: "400px",
        111.25: "445px",
        118.75: "475px",
        142.25: "569px",
      },
      screens: {
        default: "0px",
        xs: "450px",
        sm: "720px",
        md: "900px",
        lg: "1076px",
        gl: "1280px",
        xl: "1614px",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
