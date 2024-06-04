/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ['emerald', 'dim'],
        darkTheme: 'dim',
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
