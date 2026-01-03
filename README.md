# Urdu Alphabet Learning App


## Run Locally

**Prerequisites:**  None


1. Copy index.html to your computer
2. Open index.html in browser (tested on Firefox)


<div align="center">
  <h1><b>Urdu Alphabet Learning App</b></h1>
  <h3>for kids and adults</h3>
  <p>created with help from AI Studio</p>
</div>


   
<!-- Old code preserved below for historical purposes --

metadata.json

{
  "name": "Urdu Qaida - Interactive Learning",
  "description": "Interactive Urdu alphabet learning application perfected by Adnan.",
  "requestFramePermissions": []
}





package.json

{
  "name": "urdu-qaida---interactive-learning",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {

  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}





tsconfig.json

{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "types": [
      "node"
    ],
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}





vite.config.ts

import path from 'path';
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});


-- End of Old code section -->


