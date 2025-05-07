import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,      // Change to desired port number
    strictPort: true // Fail if port is already in use
  }
});
</content>
</create_file>

