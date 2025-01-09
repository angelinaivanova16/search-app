import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        open: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/search-app',
});
