# Tailwind Starter Theme
A minimal boilerplate theme for OctoberCMS using Tailwindcss, based on CJK.PL's TabulaRasa

The October AJAX framework may be useful - therefore in `partials/site/scripts.htm` jquery is loaded, and additional framework scripts are included. Comment out the whole file if you dont intend to use it.

## Features
- System pages, contact page, blog
- Easy to customise colors - all colors are defined in `tailwind.config.js`
- Additional css files to restore minimal formatting - see below for details
- Uses laravel-mix
- Hot-reload for easy theme and site development
- Loaded with Alpine.js, Glider.js and Sal.js

### Theme Options
Basic website and company info, social, plus home sections is required.

### Theme Colors
The theme uses a limited color selection. In the file `tailwind.config.js` you can find four sets of colours: primary, secondary, tertiary and grey, each of them with five variations: lightest, light, default, dark, and darkest.

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
If you use laravel Valet or Homestead, this should work.

When you run the command below:
```
npm run watch
```
you can open your site with hot-reload at http://yourdomain:3000

### Optional CSS: htmlcontent.css
I found it useful to restore basic formatting options after normalize.css removes all formatting. The only custom css file in the theme contains a couple of basic formatting options that will be applied to any DOM element with a class `.html-content`. The way I use it - and thus included in the theme - is by adding the class `.html-content` to any divs where user-generated content may appear (e.g. blog posts, comments).


### Production build
Use 'npm run prod' to compile your assets with purge and minimize options.
```
npm run prod
```
When you deploy your site, you do not need to copy the node_modules folder! It is a huge folder, over 100Mb, and it is only needed in the development stage. It is utterly useless in the production environment (if you do need that folder in the production environment, you know what you're doing and you can ignore this comment)

### Theme License

MIT License - check out [LICENSE.md](LICENSE.md) file for MIT license details
