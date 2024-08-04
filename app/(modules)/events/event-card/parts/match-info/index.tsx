import type { MatchStatus } from './types';

import styles from './styles.module.css';

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
