import styles from './styles.module.css';

export const TournamentCard = ({ title }: { title: string }) => (
    <div className={styles.tournamentCard}>{title}</div>
);
