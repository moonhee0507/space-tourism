/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "home-mobile": "url('/images/bg-home.png')",
                "home-tablet": "url('/images/bg-home-tablet.png')",
                "home-desktop": "url('/images/bg-home-desktop.png')",
                "destination-mobile": "url('/images/bg-destination.png')",
                "destination-tablet":
                    "url('/images/bg-destination-tablet.png')",
                "destination-desktop":
                    "url('/images/bg-destination-desktop.png')",
                "crew-mobile": "url('/images/bg-crew.png')",
                "crew-tablet": "url('/images/bg-crew-tablet.png')",
                "crew-desktop": "url('/images/bg-crew-desktop.png')",
                "technology-mobile": "url('/images/bg-technology.png')",
                "technology-tablet": "url('/images/bg-technology-tablet.png')",
                "technology-desktop":
                    "url('/images/bg-technology-desktop.png')",
            },
            colors: {
                "light-purple": "#d0d6f9",
                space: "#0b0d17",
            },
            screens: {
                desktop: "1440px",
            },
        },
    },
    plugins: [],
};
