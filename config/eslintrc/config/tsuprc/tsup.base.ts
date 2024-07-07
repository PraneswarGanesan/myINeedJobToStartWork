import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'es2020',
  format: ['esm'],
  clean: true,
  splitting: false,
  external: ['eslint'],
});
