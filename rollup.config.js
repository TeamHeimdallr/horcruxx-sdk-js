import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import path from 'path';

import pkg from './package.json';

const extensions = ['.js', '.ts'];

const plugins = [
  alias({
    entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  }),
  commonjs(),
  resolve({ extensions, preferBuiltins: true }),
  peerDepsExternal(),
  json(),
  typescript({
    clean: true,
    sourceMap: false,
    noEmitOnError: true,
    tsconfig: './tsconfig.json',
  }),
  babel({
    // babelHelpers: 'runtime',
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    // extensions,
    // skipPreflightCheck: true,
  }),
  sourcemaps(),
  terser(),
];

const treeshake = {
  moduleSideEffects: false,
};

const external = ['web3'];

export default [
  // esm 번들링
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'esm',
        exports: 'auto',
        sourcemap: true,
      },
    ],
    // external: [/@babel\/runtime/],
    external,
    treeshake,
    plugins,
  },
  // cjs 번들링
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'auto',
        sourcemap: true,
      },
    ],
    // external: [/@babel\/runtime/],
    external,
    treeshake,
    plugins,
  },
];
