const mix = require('laravel-mix');

let postCssPlugins = [
    require('postcss-import'),
    require('@tailwindcss/postcss'),
    require('autoprefixer')
];

mix.setPublicPath('./')
    .js('assets/src/js/app.js', 'assets/dist/js')
    .postCss('assets/src/css/style.css', 'assets/dist/css', postCssPlugins)
    .browserSync({
        proxy: 'https://octoberstarter.test',
        host: 'octoberstarter.test',
        open: 'external',
        https: {
            key: '/Users/responsive/.config/valet/Certificates/octoberstarter.test.key',
            cert: '/Users/responsive/.config/valet/Certificates/octoberstarter.test.crt',
        },
        files: [
            'layouts/**/*.htm',
            'pages/**/*.htm',
            'partials/**/*.htm',
            // 'assets/src/js/**/*.js',
            // 'assets/src/css/**/*.css'
            'assets/dist/js/app.js',
            'assets/dist/css/style.css'
        ]
    })
    .options({
        terser: {
          extractComments: false,
        }
    });