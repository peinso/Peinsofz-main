/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'piensofz.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'piensofz.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'a3ttalsa-001-site4.atempurl.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'a3ttalsa-001-site4.atempurl.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'peinso.vercel.app',
                port: '',
                pathname: '/**',
            }/* ,
            {
                protocol: 'https',
                hostname: 'www.peinsofz.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'latest-peinso.vercel.app',
                port: '',
                pathname: '/**',
            }*/,
            {
                protocol: 'https',
                hostname: 'peinsofz.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
}