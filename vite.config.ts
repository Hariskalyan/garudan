import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';

// Load .env variables for local Vite dev server
dotenv.config();

function netlifyFunctionDevPlugin(): Plugin {
  return {
    name: 'netlify-function-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && req.url.startsWith('/.netlify/functions/send-mail')) {
          if (req.method === 'OPTIONS') {
            res.statusCode = 200;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
            res.end('');
            return;
          }

          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.end(JSON.stringify({ success: false, message: 'Method Not Allowed' }));
            return;
          }

          let bodyStr = '';
          req.on('data', (chunk) => {
            bodyStr += chunk;
          });

          req.on('end', async () => {
            try {
              // Reload .env on each request in dev
              const envPath = path.resolve(process.cwd(), '.env');
              if (fs.existsSync(envPath)) {
                const envConfig = dotenv.parse(fs.readFileSync(envPath));
                for (const k in envConfig) {
                  process.env[k] = envConfig[k];
                }
              }

              // Load the Netlify function dynamically via Vite SSR module loader
              let functionPath = path.resolve(process.cwd(), 'netlify/functions/send-mail.ts');
              if (!fs.existsSync(functionPath)) {
                functionPath = path.resolve(process.cwd(), 'netlify/functions/send-mail.js');
              }
              const sendMailModule = await server.ssrLoadModule(functionPath);
              const sendMailHandler = sendMailModule.handler;

              console.log('\n📩 [VITE DEV SERVER] Processing Quote / Contact form submission...');

              const result = await sendMailHandler({
                httpMethod: 'POST',
                body: bodyStr,
              });

              res.statusCode = result.statusCode || 200;
              if (result.headers) {
                Object.entries(result.headers).forEach(([k, v]) => {
                  res.setHeader(k, v as string);
                });
              }

              console.log(`[VITE DEV SERVER] Function response status ${result.statusCode}:`, result.body);

              res.end(result.body);
            } catch (err: any) {
              console.error('❌ [VITE DEV SERVER ERROR]:', err.message || err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: false,
                  message: 'Local serverless function execution failed.',
                  error: err.message,
                })
              );
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlifyFunctionDevPlugin()],
});
