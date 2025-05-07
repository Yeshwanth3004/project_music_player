import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,      // explicitly set dev server port to 3000
    strictPort: true // fail if port 3000 is already in use
  },
});
