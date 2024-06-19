import path from 'node:path';
import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src/'),
    },
  },
});
