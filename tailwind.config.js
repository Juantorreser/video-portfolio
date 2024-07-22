/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                pri: "#cc1c42",
                sec: "#271626",
                ter: "#121222",
            },
        },
    },
    plugins: [],
};

