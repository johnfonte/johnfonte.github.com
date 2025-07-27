import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://johnfonte.github.io',
    base: '/johnfonte.com',
    output: 'static',
    build: {
        assets: 'assets'
    }
});