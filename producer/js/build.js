const { build } = require('esbuild')
const glob = require('glob')
const entryPoints = glob.sync('./src/**/*.ts')

build({
    entryPoints,
    outbase: './src',
    outdir: './lib' ,
    platform: 'node',
    format: 'cjs',
    external: [],
    watch: false,
})

