import path from 'path';
import fs from 'fs-extra';
import { createRequestHandler, installGlobals } from '@remix-run/node';
// import pkg from '@remix-run/server-runtime';
// console.log(pkg);
// import { ServerBuild } from '@remix-run/server-runtime';
// import build from '../build';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current file path info
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Install globals
installGlobals();

async function buildStatic() {
  // Import your server build
  const { default: build } = await import('../build/index.cjs');
  
  // Define routes to pre-render
  const routes = ['/'];
  
  // Create request handler
  const handleRequest = createRequestHandler(build, 'production');
  
  // Generate HTML for each route
  for (const route of routes) {
    console.log(`Pre-rendering ${route}`);
    
    // Create fake request
    const request = new Request(`http://localhost${route}`);
    
    // Get response from Remix
    const response = await handleRequest(request);
    const html = await response.text();
    
    // Write HTML to file
    const outputPath = path.join(__dirname, '../public', route === '/' ? 'index.html' : `${route}.html`);
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, html);
  }
  
  console.log('Static site generation complete!');
}

buildStatic().catch(console.error);