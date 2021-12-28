module.exports = {
    content: [
        './assets/src/**/*.vue',
        './layouts/**/*.htm',
        './pages/**/*.htm',
        './partials/**/*.htm',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#379583',
                'secondary': '#69d391',
                'tertiary': '#34454f',
                'error': '#FF6363',
                'white': '#FFFFFF',
                'transparent': 'transparent'
            },
            fontFamily: {
                'body': ['Roboto','sans-serif'],
                'display': ['Roboto', 'sans-serif']
            },
        },
        container: {
            center: true,
            padding: '1rem'
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ]
}
