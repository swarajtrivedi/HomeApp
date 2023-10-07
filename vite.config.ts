import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation"

const remoteHeaderURL = 'http://localhost:3000/assets/remoteEntry.js'
const remoteContentURL = 'http://localhost:3006/assets/remoteEntry.js'

export default defineConfig({
  server: { port  : 4000},
  plugins: [react(),
    federation({
      name:"HomePage",
      remotes: {
        HeaderApp : remoteHeaderURL,
        ContentApp : remoteContentURL
      },
      shared: ["react", "react-dom"],
  })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        
        
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
            console.log('pikachu')
              return 'assets/images/[name]-[hash][extname]';
          }
          
          if (/\.css$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';   
          }
 
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    }
  },
})
