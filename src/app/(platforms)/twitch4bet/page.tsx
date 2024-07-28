import type { Metadata } from 'next';

import { Streamers } from '$/app/(core)/streamers';

import { Header } from './parts/header';
import { Tabs } from './parts/tabs';

import styles from './styles.module.css';

export const Footer = () => {
    return <div>Footer</div>;
};

export const metadata: Metadata = {
    title: 'Twitch4Bet',
    description: 'Ставки на стримеров.',
};

export const streamersMock = [
    {
        title: 'betboom_cs_b',
        description:
            'Lorem ipsum askdm laksmd klasmfvlkj; asdmnjkansdfkjl nasdfjk; nd;ajksnfjk;san ;oaifn',
    },
    {
        title: 'betboom_cs_b',
        description: 'Студия FISSURE пр',
    },
    {
        title: 'betboom_cs_b',
        description:
            'Студия FISSURE при поддержке генерального партнера BetBoom готова показать  вам долгожданный турнир',
    },
    {
        title: 'betboom_cs_b',
        description:
            'Студия FISSURE при поддержке генерального партнера BetBoom готова показать  вам долгожданный турнир',
    },
    {
        title: 'betboom_cs_b',
        description:
            'Студия FISSURE при поддержке генерального партнера BetBoom готова показать  вам долгожданный турнир',
    },
    {
        title: 'betboom_cs_b',
        description:
            'Студия FISSURE при поддержке генерального партнера BetBoom готова показать  вам долгожданный турнир',
    },
];

const Main = () => {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.inputWrapper}>
                <input placeholder="Search /" className={styles.input} />
            </div>
            <Tabs />
            <Streamers streamers={streamersMock} />
            <Footer />
        </main>
    );
};

export default Main;
