import { defineConfig, loadEnv } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  console.log(process.env.VITE_API_TOKEN)         //Works fine: VALUE is logged
  

  return defineConfig({
    plugins: [preact()]
  })
}


