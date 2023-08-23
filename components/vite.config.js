import { defineConfig } from 'vite'
import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    plugins: [svelte()],
    build: {
        polyfillModulePreload: false,
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            fileName: 'material',
            formats: ['es']
        },
    }
})
