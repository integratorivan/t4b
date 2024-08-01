import { Navigation } from './parts/navigation';

import styles from './styles.module.css';

export const MatchInfo = () => (
    <>
        <div>
            <div className={styles.circle} />
            <span>Counter Strike 2</span>
            <span>Live</span>
        </div>
        <span>European Pro League Season 16: Division 1</span>
    </>
);

export const Scoreboard = () => {
    return (
        <div>
            <div>
                <p>NAVI</p>
            </div>
            <div>
                <p>3:6</p>
            </div>
            <div>
                <p>DAVI</p>
            </div>
        </div>
    );
};

export const EventCard = () => {
    return (
        <div className={styles.eventCard}>
            <MatchInfo />
            <Scoreboard />
            <Navigation />
        </div>
    );
};
