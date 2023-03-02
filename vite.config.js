import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    react(),
    EnvironmentPlugin('all', { prefix: 'REACT_APP_' }),
  ],
  
  server: {
    port: 3000,
    host: "192.168.178.110"
  },
  
})

// export default ({ mode }) => {
//   require('dotenv').config({ path: `./.env.${mode}` });
//   // now you can access config with process.env.{configName}

//   return defineConfig({
  
//       plugins: [react()],
//       server: {
//         port: 3000,
//         host: "192.168.178.110"
//       }
//      })
// }

