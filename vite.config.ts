import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the React plugin

export default defineConfig({
    plugins: [react()], // Add the React plugin here
    resolve: {
      alias: {
        // Your existing alias is good
        '@': path.resolve(__dirname, '.'),
      }
    },
    base: "./", // Important for deployment.
               // If deploying to GitHub Pages at username.github.io/your-repo-name/
               // set this to "/your-repo-name/"
               // For Netlify/Vercel root, or username.github.io, "./" or "/" is usually fine.
});