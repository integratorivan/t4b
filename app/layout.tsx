import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import './variables.css';
import './globals.css';

import 'swiper/css';
import 'swiper/css/effect-fade';

// TODO: разобраться с локальными шрифтами. Пока не смог подтянуть
// const lato = localFont({
//     src: [
//         {
//             path: '/lato-medium.woff2',
//             weight: '500',
//             style: 'normal',
//         },
//     ],
// });

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
        // {
        //     path: '../public/assets/Lato-Black.woff2',
        //     weight: '900',
        // },
    ],
});

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
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
