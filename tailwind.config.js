/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                98: "28rem",
                128: "32rem",
            },
            height: {
                98: "28rem",
                128: "32rem",
            },
            maxHeight: {
                98: "28rem",
                128: "32rem",
            },
        },

        screens: {
            smmax: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["wireframe", "dracula"],
    },
};
