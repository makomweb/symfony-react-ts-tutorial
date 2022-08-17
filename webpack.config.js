const Encore = require('@symfony/webpack-encore');

Encore

    // Build
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    // Typescript + React
    .addEntry('app', './assets/js/App.tsx')
    .enableReactPreset()
    .enableTypeScriptLoader();

module.exports = Encore.getWebpackConfig();