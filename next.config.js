const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI : "mongodb+srv://kimmy:rootroot@cluster0.curlpbd.mongodb.net/",
    DB_URI : "",
    NEXTAUTH_SECRET: "SDFSDFSDFS",
    NEXTAUTH_URL: "http://localhost:3000",
  },
  images: {
    domains: ['res.cloudinary.com'],
  }
}

module.exports = nextConfig;
