/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-06-09 09:17
 * @LastEditors  : StarOne
 * @Description  :
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // 拆分第三方依赖为独立 vendor chunk,业务代码变更时不失效,利于长期缓存
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'antd-vendor': ['antd', '@ant-design/icons'],
          'i18n-vendor': ['i18next', 'react-i18next'],
        },
      },
    },
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
