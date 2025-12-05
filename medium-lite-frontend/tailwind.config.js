const config = {
    // Đảm bảo Tailwind quét các file trong thư mục src/
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}", // Đảm bảo quét Feature components
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#137fec",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
            },
            fontFamily: {
                display: ["var(--font-work-sans)"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    // Bắt buộc phải có vì code gốc sử dụng form-input
    // plugins: [require("@tailwindcss/forms")],
};

export default config;
