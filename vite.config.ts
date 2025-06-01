import path from 'node:path';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { normalizePath } from 'vite';
import { patchCssModules } from 'vite-css-modules';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    patchCssModules({
      generateSourceTypes: true,
    }),
    TanStackRouterVite({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve('./src/assets/locales')),
          dest: normalizePath(path.resolve('./dist')),
        },
        {
          src: normalizePath(path.resolve('./src/assets/images')),
          dest: normalizePath(path.resolve('./dist')),
        },
      ],
    }),
  ],
  server: {
    host: true,
    strictPort: true,
  },
  test: {
    environment: 'jsdom',
    css: true,
  },
});
