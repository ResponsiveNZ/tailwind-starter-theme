module.exports = {
    purge: [
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
            inset: {
                '-50': '-50%',
                '50': '50%',
                '-4': '-1rem',
            },
            boxShadow: {
                xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
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
    ]
}
