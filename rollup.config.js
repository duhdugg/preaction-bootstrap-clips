import commonjs from '@rollup/plugin-commonjs'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import sucrase from '@rollup/plugin-sucrase'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
import visualizer from 'rollup-plugin-visualizer'

const plugins = [
  external(),
  nodeResolve(),
  postcss({}),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['jsx']
  }),
  commonjs(),
  terser()
]

const cjsConfig = {
  input: 'index.js',
  external: ['prop-types'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      plugins: [
        getBabelOutputPlugin({
          compact: true,
          presets: [
            [
              '@babel/preset-env',
              {
                modules: 'cjs',
                targets: 'maintained node versions'
              }
            ]
          ]
        })
      ]
    }
  ],
  plugins: plugins.concat(
    visualizer({ filename: 'stats/cjs.html', sourcemap: true, gzipSize: true })
  )
}

const esmConfig = {
  input: 'index.js',
  external: ['prop-types'],
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: plugins.concat(
    visualizer({ filename: 'stats/esm.html', sourcemap: true, gzipSize: true })
  )
}

const umdConfig = {
  input: 'index.js',
  external: ['prop-types'],
  output: [
    {
      file: 'dist/preaction-bootstrap-clips.umd.js',
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes'
      },
      sourcemap: true,
      name: '@preaction/bootstrap-clips',
      plugins: [
        getBabelOutputPlugin({
          allowAllFormats: true,
          compact: true,
          presets: [
            [
              '@babel/preset-env',
              {
                modules: 'umd',
                targets: 'defaults'
              }
            ]
          ]
        })
      ]
    }
  ],
  plugins: plugins.concat(
    visualizer({ filename: 'stats/umd.html', sourcemap: true, gzipSize: true })
  )
}

export default [esmConfig, cjsConfig, umdConfig]
