/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-06-08 21:51
 * @LastEditors  : StarOne
 * @Description  :
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
    visualizer(),
    ViteImageOptimizer({
      /* pass your config */
      png: {
        quality: 80
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 70
      }
    })
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/common' as common;`
      }
    }
  }
});
