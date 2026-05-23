/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // static export — works on Vercel, Netlify, GitHub Pages
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
