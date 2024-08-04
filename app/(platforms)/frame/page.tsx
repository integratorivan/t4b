import { Events } from '$/app/(modules)/events';
import { Streamers } from '$/app/(modules)/streamers';
import { Button } from '$/app/(shared)/components/button';

import styles from './styles.module.css';

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

const FramePage = () => {
    return (
        <div className={styles.framePage}>
            <Streamers streamers={streamersMock} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 80 }}>
                <h1>События</h1>
                <Button size="md" variant="transparent">
                    Смотреть больше
                </Button>
            </div>
            <Events />
        </div>
    );
};

export default FramePage;
