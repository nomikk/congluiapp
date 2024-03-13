let mix = require('laravel-mix');

mix.sass('src/sass/main.scss', 'dist/css').options({
    processCssUrls: false,
});
