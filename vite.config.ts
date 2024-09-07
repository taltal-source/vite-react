import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  // WSL用設定
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },

    // Devcontainerポート転送設定
    host: '127.0.0.1',
  },
});
