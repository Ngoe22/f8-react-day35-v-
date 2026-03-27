// import { defineConfig } from 'vite'
// import react, { reactCompilerPreset } from '@vitejs/plugin-react'
// import babel from '@rolldown/plugin-babel'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     babel({ presets: [reactCompilerPreset()] })
//   ],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()], // bỏ hết option liên quan compiler
     base: '/f8-react-day35-v-/',
});
