import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import prettier from 'rollup-plugin-prettier';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

import path from 'path';

const extensions = ['.js', '.ts'];

export default [
  // esm 번들링
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/esm/index.js', format: 'esm', exports: 'auto' }],
    external: [/@babel\/runtime/],
    plugins: [
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
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
        sourceMap: false,
        noEmitOnError: true,
      }),
      resolve({ extensions }),
      peerDepsExternal(),
      terser(),
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
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
        sourceMap: false,
        noEmitOnError: true,
      }),
      resolve({ extensions }),
      peerDepsExternal(),
      terser(),
    ],
  },
  // // 타입 정의 파일 번들링
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],

    plugins: [
      dts.default(),
      alias({
        entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
      }),
      prettier({ tabWidth: 2 }),
    ],
  },
];
