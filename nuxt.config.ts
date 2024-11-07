// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const env = process.env.ENV || 'local';
const envPath = path.resolve(process.cwd(), `.env.${env}`);
const defaultEnvPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: fs.existsSync(envPath) ? envPath : defaultEnvPath });

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
        apiBaseUrl: process.env.BASE_URL
    }
  }
})
