import { env } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => [
        {
            source: '/api/:path*',
            destination: `${env.API_URL}/:path*`,
        },
    ],
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/twitch4bet',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
