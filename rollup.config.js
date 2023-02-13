import { babel } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import localResolve from 'rollup-plugin-local-resolve';
import autoprefixer from 'autoprefixer';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      assetFileNames: '[name][extname]',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    peerDepsExternal(),
    localResolve(),
    scss({
      processor: () => postcss([autoprefixer()]),
      fileName: 'index.css',
      output: 'lib/index.css',
      outputStyle: 'compressed',
    }),
    image(),
    typescript(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser({
      output: { comments: false },
      compress: {
        drop_console: true,
      },
    }),
    filesize(),
  ],
  external: Object.keys(pkg.dependencies),
};

export default config;
