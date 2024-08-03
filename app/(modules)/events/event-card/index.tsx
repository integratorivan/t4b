import { Navigation } from './parts/navigation';

import styles from './styles.module.css';

export type MatchStatus = 'live' | 'planing' | null;

export const MatchInfo = () => {
    const matchStatus: MatchStatus = 'live';

    const getStatus = () => {
        if (matchStatus === 'live') {
            return <div className={styles.liveBadge}>Live</div>;
        }

        return null;
    };

    return (
        <div className={styles.mathInfo}>
            <div className={styles.matchInfoTitleContainer}>
                <div className={styles.circle} />
                <span className={styles.matchInfoTitle}>Counter Strike 2</span>
                {getStatus()}
            </div>
            <span className={styles.matchInfoTournament}>
                European Pro League Season 16: Division 1
            </span>
        </div>
    );
};

export const Scoreboard = () => (
    <div className={styles.scoreboard}>
        <div className={styles.teamContainer}>
            <p className={styles.teamName}>Team fucking spirit</p>
            <div className={styles.logoCircle} />
        </div>
        <div className={styles.scoreContainer}>
            <span>3</span>
            <span>:</span>
            <span>1</span>
        </div>
        <div className={styles.teamContainer}>
            <p className={styles.teamName}>Davi</p>
            <div className={styles.logoCircle} />
        </div>
    </div>
);

export const ScoreMaps = () => {
    return (
        <div className={styles.scoreMaps}>
            <div className={styles.scoreMapsContainer}>
                <span className={styles.score}>13</span>
                <div className={styles.divider}>|</div>
                <span className={styles.score}>6</span>
            </div>
            <div className={styles.scoreName}>Карта 1</div>
        </div>
    );
};

export const EventCard = () => {
    return (
        <div className={styles.eventCard}>
            <MatchInfo />
            <Scoreboard />
            <ScoreMaps />
            <Navigation />
        </div>
    );
};
