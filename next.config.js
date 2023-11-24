/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "fsw-store.s3.sa-east-1.amazonaws.com",
            "th.bing.com",
            "http2.mlstatic.com",
            "imgs.casasbahia.com.br"
        ],
    }
}

module.exports = nextConfig
