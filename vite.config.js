import { defineConfig } from 'vite';
import dns from 'dns';

import react from '@vitejs/plugin-react';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
