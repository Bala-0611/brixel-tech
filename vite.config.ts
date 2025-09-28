import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    server: {
      port: 3000,
      host: true,              // ✅ accept connections from any network interface
      strictPort: false,
      // ✅ allow local and Render domain requests
      allowedHosts: ['brixel-tech.onrender.com', 'localhost', '127.0.0.1'],
    },
    preview: {
      port: 3000,
      host: true,
      allowedHosts: ['brixel-tech.onrender.com', 'localhost', '127.0.0.1'],
    }
  };
});
