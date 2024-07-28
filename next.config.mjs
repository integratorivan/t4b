/** @type {import('next').NextConfig} */
const nextConfig = {
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
