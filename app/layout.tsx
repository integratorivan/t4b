import localFont from 'next/font/local';

import './variables.css';
import './globals.css';

import 'swiper/css';
import 'swiper/css/effect-fade';

const lato = localFont({
    src: [
        {
            path: '../public/assets/Lato-Regular.woff2',
            weight: '400',
        },
        {
            path: '../public/assets/Lato-Medium.woff2',
            weight: '500',
        },
        {
            path: '../public/assets/Lato-Semibold.woff2',
            weight: '600',
        },
        {
            path: '../public/assets/Lato-Bold.woff2',
            weight: '700',
        },
        {
            path: '../public/assets/Lato-Heavy.woff2',
            weight: '800',
        },
    ],
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={lato.className}>{children}</body>
        </html>
    );
}
