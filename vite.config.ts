import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/web-component.ts',
      name: 'WalletModal',
      fileName: (format) => `wallet-modal.${format}.js`,
      formats: ['es', 'umd']
    }
  },
  define: {
    'process.env': {}
  }
})