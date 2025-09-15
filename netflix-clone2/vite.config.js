import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/netflix-clone-march-batch/', 
  plugins: [react()],
});