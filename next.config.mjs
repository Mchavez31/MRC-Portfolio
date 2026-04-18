import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Avoid picking C:\Users\micha\ when a stray package-lock.json exists there
    root: __dirname,
  },
};

export default nextConfig;
