module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production'
        ? '/conferences/RNJC-SI/22/'
        : '',

    // Other options include:
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('autoprefixer') // Ajoute automatiquement les préfixes vendeurs aux propriétés CSS
                ]
            }
        }
    }
}
