import { defineConfig } from 'vite';

export default defineConfig({
    base: '/',
    build: {
        target: 'esnext',
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './public/index.html',
                world: './public/world.html',
            }
        }
    },
    root: 'public',
    server: {
        open: true,
    }
});
