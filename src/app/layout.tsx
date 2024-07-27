import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

import './variables.css';
import { Reatom } from './abs';
import './globals.css';

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
    title: 'Twitch4Bet',
    description: 'Ставки на стримеров.',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const data = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json();

    return (
        <html lang="en">
            <body className={lato.className}>
                <h1>Layoyt</h1>
                <Reatom params={data}>{children}</Reatom>
            </body>
        </html>
    );
}
