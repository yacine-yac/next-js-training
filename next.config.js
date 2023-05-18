/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects:async()=>[{
    source:"/about",
    destination:"/work" ,
    permanent:true
  }]
}

module.exports = nextConfig
