import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import dts from 'rollup-plugin-dts';
import path from 'path';

const extensions = ['.js', '.ts'];

const plugins = [
  alias({ entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }] }),
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
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  sourcemaps(),
  terser(),
];

const treeshake = {
  moduleSideEffects: false,
};

const external = ['web3'];

export default [
  {
    input: 'src/sbt/index.ts',
    output: [
      { file: 'dist/sbt/index.esm.js', format: 'esm', exports: 'auto', sourcemap: true },
      { file: 'dist/sbt/index.cjs.js', format: 'cjs', exports: 'auto', sourcemap: true },
    ],
    external,
    treeshake,
    plugins,
  },
  {
    input: 'src/sbt/index.ts',
    output: [{ file: 'dist/sbt/index.d.ts', format: 'esm' }],
    plugins: [dts.default(), alias({ entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }] })],
  },

  {
    input: 'src/nft/index.ts',
    output: [
      { file: 'dist/nft/index.esm.js', format: 'esm', exports: 'auto', sourcemap: true },
      { file: 'dist/nft/index.cjs.js', format: 'cjs', exports: 'auto', sourcemap: true },
    ],
    external,
    treeshake,
    plugins,
  },
  {
    input: 'src/nft/index.ts',
    output: [{ file: 'dist/nft/index.d.ts', format: 'esm' }],
    plugins: [dts.default(), alias({ entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }] })],
  },
];
