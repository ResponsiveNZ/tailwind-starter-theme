const mix = require('laravel-mix');

const purgeCss = require('@fullhuman/postcss-purgecss');

let postCssPlugins = [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer')
];

if (mix.inProduction()) {
    postCssPlugins.push(purgeCss({
        content: [
            'layouts/**/*.htm',
            'pages/**/*.htm',
            'partials/**/*.htm',
        ],
        whitelistPatterns: [
            /active$/,
            /error$/
          ],
        whitelistPatternsChildren: [/active$/],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }));
}

mix.setPublicPath('./')
    .js('assets/src/js/app.js', 'assets/dist/js')
    .postCss('assets/src/css/style.css', 'assets/dist/css', postCssPlugins)
    .browserSync({
        proxy: 'https://octobertw.app',
        host: 'octobertw.app',
        open: 'external',
        https: {
            key: '/Users/responsive/.config/valet/Certificates/octobertw.app.key',
            cert: '/Users/responsive/.config/valet/Certificates/octobertw.app.crt',
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
