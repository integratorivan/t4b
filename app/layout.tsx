import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
            <body className={inter.className}>{children}</body>
        </html>
    );
}
