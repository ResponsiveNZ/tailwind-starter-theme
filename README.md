# Tailwind Starter Theme
A minimal boilerplate theme for OctoberCMS using Tailwindcss, based on CJK.PL's TabulaRasa

The October AJAX framework may be useful - therefore in `partials/site/scripts.htm` jquery is loaded, and additional framework scripts are included. Comment out the whole file if you dont intend to use it.

## Features
- System pages, contact page, blog
- Easy to customise colors - all colors are defined in `tailwind.config.js`
- Additional css files to restore rich editor styles - see below for details
- Uses laravel-mix
- Tailwind JIT mode for super small CSS file in development
- Hot-reload for easy theme and site development
- Loaded with Alpine.js, Glider.js and Sal.js

### Theme Options
Basic website and company info, social media links.

### Theme Colors
The theme uses a limited color selection. In the file `tailwind.config.js` you can find custom theme colours: primary, secondary and tertiary, plus white, error and transparent.

There is an advantage to this setup - you can quickly change colors in the whole app, just by changing the primary & secondary colors.

If you prefer to use standard TailwindCSS colours, remove the whole 'colors' section from the above file.


### Theme Setup
You must first install the theme dependencies. In the theme folder, execute:
```
npm install
```

### Theme Customisation and Development
In webpack.mix.js replace site name in the browser sync section.
```
If you use laravel Valet or Homestead, browser sync should now work.

When you run the command below:
```
npm run watch
```
you can open your site with hot-reload at http://yourdomain:3000

### Optional CSS: base/rich-editor.css
The '.prose' utility handles general styling of dynamic html elements. This css file contains styling specific to October's rich editor, that will be applied to any DOM element with a class `.rich-editor`. The way I use it - and thus included in the theme - is by adding the class `.rich-editor` to any divs where user-generated content may appear (e.g. blog posts, comments). This will take care of any of the rich editor specific options e.g. paragraph outlines, table highlighting. 


### Production build
Use 'npm run prod' to compile your assets with purge and minimize options.
```
npm run prod
```
When you deploy your site, you do not need to copy the node_modules folder! It is a huge folder, over 100Mb, and it is only needed in the development stage. It is utterly useless in the production environment (if you do need that folder in the production environment, you know what you're doing and you can ignore this comment)

### Theme License

MIT License - check out [LICENSE.md](LICENSE.md) file for MIT license details
