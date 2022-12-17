import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';

const extensions = ['.js', '.ts'];

export default [
  // esm 번들링
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/esm/index.js', format: 'esm', exports: 'auto' },
      { file: 'dist/es/index.js', format: 'esm', exports: 'auto' },
    ],
    external: [/@babel\/runtime/],
    plugins: [
      typescript({
        sourceMap: false,
        noEmitOnError: true,
        tsconfig: './tsconfig.json',
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
        skipPreflightCheck: true,
      }),
      alias({
        entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
      }),
      commonjs({ extensions: [...extensions, '.js'] }),
      resolve({ extensions, preferBuiltins: true }),
      peerDepsExternal(),
      json(),
    ],
  },
  // cjs 번들링
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'auto',
        preserveModules: true,
      },
    ],
    external: [/@babel\/runtime/],
    plugins: [
      typescript({
        sourceMap: false,
        noEmitOnError: true,
        tsconfig: './tsconfig.json',
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
        skipPreflightCheck: true,
      }),
      alias({
        entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
      }),
      commonjs({ extensions: [...extensions, '.js'] }),
      resolve({ extensions }),
      peerDepsExternal(),
      json(),
    ],
  },
];
