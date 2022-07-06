import { defineConfig as defineVite } from 'vite'
import { defineConfig as defineVitest } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const defaultConfig = defineVite({
  plugins: [react(), tsconfigPaths()]
})

const vitestConfig = defineVitest({
  test: {
    globals: true,
    environment: 'jsdom'
  }
})

export default { ...defaultConfig, ...vitestConfig }
