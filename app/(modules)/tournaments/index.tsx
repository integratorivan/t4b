import { TournamentCard } from './tournament-card';

import styles from './styles.module.css';

export const Tournaments = () => (
    <div className={styles.tournaments}>
        {Array.from({ length: 8 }).map((_, index) => (
            <TournamentCard key={index} title={`ESL Season ${index}: Division`} />
        ))}
    </div>
);
