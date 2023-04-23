import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import PluginCopy from './build/vite-plugin-copy'
import path from 'path';

const pathResolve = (pathStr: string) => path.resolve(__dirname, pathStr)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), PluginCopy([
    {
      src: './node_modules/cesium/Build/Cesium/*',
      target: pathResolve('public/libs/cesium'),
    },
    // {
    //   src: './node_modules/cesium/Build/CesiumUnminified/*',
    //   target: pathResolve('public/libs/CesiumUnminified'),
    // },
  ])],
})
