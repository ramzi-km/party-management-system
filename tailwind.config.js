/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        screens: {
            xs: '320px',

            sm: '480px',

            md: '768px',

            lg: '1024px',

            xl: '1280px',

            '2xl': '1536px',
        },
    },
    daisyui: {
        themes: ['emerald', 'dim'],
        darkTheme: 'dim',
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
