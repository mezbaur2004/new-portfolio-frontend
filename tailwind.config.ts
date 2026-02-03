import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "media",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // tailwind.config.js
        extend: {
            animation: {
                fadeIn: "fadeIn 0.6s ease-out forwards",
            },
            keyframes: {
                fadeIn: {
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
        },

    },
    plugins: [],
};

export default config;
