'use client';

import { atom } from '@reatom/core';
import { reatomAsync } from '@reatom/framework';
import { reatomComponent } from '@reatom/npm-react';
import Image from 'next/image';

import { Button } from './comp';
import { userAtom } from './model/user';

import styles from './page.module.css';

export const atoms = atom(1, 'atoms');
export const atomTitle = atom('123', 'atomTitle');

export const getData = reatomAsync((ctx) => {
    const id = Math.floor(Math.random() * 199) + 1;

    return ctx.schedule(async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
            res.json(),
        );
        userAtom(ctx, data);
    });
});

const Home = reatomComponent(({ ctx }) => {
    ctx.spy(getData);

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>{ctx.spy(userAtom)?.title}</p>
                <h1>{ctx.spy(userAtom)?.id}</h1>
                <button onClick={() => getData(ctx)}>Click</button>
                <Button />
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <div className={styles.grid}>
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore starter templates for Next.js.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
                </a>
            </div>
        </main>
    );
});

export default Home;
