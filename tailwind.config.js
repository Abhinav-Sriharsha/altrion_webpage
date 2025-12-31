/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                surface: 'var(--card)', // mapping surface to card for now, or use background
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                accent: 'var(--ring)', // Using ring as accent or primary
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}
