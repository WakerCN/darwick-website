/*
 * @Author       : 魏威
 * @Date         : 2025-05-27 10:45
 * @LastEditTime : 2025-05-27 15:08
 * @LastEditors  : StarOne
 * @Description  :
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/styles/common.scss";`
  //     }
  //   }
  // }
});
