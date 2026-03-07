/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing configuration
 
  
  // ADD THIS BLOCK to disable Image Optimization
  images: {
    unoptimized: true,
  },
}

export default nextConfig