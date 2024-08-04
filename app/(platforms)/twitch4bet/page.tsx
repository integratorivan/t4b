import type { Metadata } from 'next';

import { Events } from '$/app/(modules)/events';
import { Streamers } from '$/app/(modules)/streamers';
import { Tournaments } from '$/app/(modules)/tournaments';
import { Button } from '$/app/(shared)/components/button';

import { Header } from './parts/header';
import { Tabs } from './parts/tabs';

import styles from './styles.module.css';

export const metadata: Metadata = {
    title: 'Twitch4Bet',
    description: 'Ставки на стримеров.',
};

const streamersMock = [
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

const Twitch4bet = () => {
    return (
        <div className={styles.main}>
            <div className={styles.inputWrapper}>
                <input placeholder="Search /" className={styles.input} />
            </div>
            <Tabs />
            <Streamers streamers={streamersMock} />
            <div className={styles.divider} />
            <Tournaments />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 80,
                }}
            >
                <h1 className={styles.title}>События</h1>
                <Button size="md" variant="transparent">
                    Смотреть больше
                </Button>
            </div>
            <Events />
        </div>
    );
};

export default Twitch4bet;
