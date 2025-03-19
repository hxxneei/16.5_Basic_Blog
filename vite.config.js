import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://dain-blog.inuappcenter.kr/swagger-ui/index.html#/", // 백엔드 API 주소
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
