import { MatchInfo } from './parts/match-info';
import { Navigation } from './parts/navigation';
import { Scoreboard } from './parts/scoreboard';

import styles from './styles.module.css';

export const EventCard = () => (
    <div className={styles.eventCard}>
        <MatchInfo />
        <Scoreboard />
        <Navigation />
    </div>
);
