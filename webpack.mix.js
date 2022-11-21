const mix = require('laravel-mix');

let postCssPlugins = [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer')
];

mix.setPublicPath('./')
    .js('assets/src/js/app.js', 'assets/dist/js')
    .postCss('assets/src/css/style.css', 'assets/dist/css', postCssPlugins)
    .browserSync({
        proxy: 'https://octoberstarter.app',
        host: 'octoberstarter.app',
        open: 'external',
        https: {
            key: '/Users/responsive/.config/valet/Certificates/octoberstarter.app.key',
            cert: '/Users/responsive/.config/valet/Certificates/octoberstarter.app.crt',
        },
        files: [
            'layouts/**/*.htm',
            'pages/**/*.htm',
            'partials/**/*.htm',
            'assets/dist/js/app.js',
            'assets/dist/css/style.css'
        ]
    })
    .options({
        terser: {
          extractComments: false,
        }
    });
