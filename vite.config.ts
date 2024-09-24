import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {
      icon: true, // Optional, if you want your SVGs to behave like icons
    },
  }),],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@rest-apis': path.resolve(__dirname, 'src/rest-apis'),
    },
  },
});
