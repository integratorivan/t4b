import styles from './styles.module.css';

export const Scoreboard = () => {
    const carts = [1, 2, 3];

    return (
        <>
            <div className={styles.scoreboard}>
                <div className={styles.teamContainer}>
                    <p className={styles.teamName}>Team fucking spirit</p>
                    <div className={styles.logoCircle} />
                </div>
                <div className={styles.scoreboardContainer}>
                    <span>3</span>
                    <span>:</span>
                    <span>1</span>
                </div>
                <div className={styles.teamContainer}>
                    <p className={styles.teamName}>Davi</p>
                    <div className={styles.logoCircle} />
                </div>
            </div>
            <div className={styles.scoreContainer}>
                {carts.map((item) => (
                    <div key={item} className={styles.scoreMaps}>
                        <div className={styles.scoreMapsContainer}>
                            <span className={styles.score}>13</span>
                            <div className={styles.divider}>|</div>
                            <span className={styles.score}>6</span>
                        </div>
                        <div className={styles.scoreName}>Карта {item}</div>
                    </div>
                ))}
            </div>
        </>
    );
};
