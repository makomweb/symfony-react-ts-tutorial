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
    .enableTypeScriptLoader()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .disableSingleRuntimeChunk()

module.exports = Encore.getWebpackConfig();