import { BackgroundPatterIcon } from '$/app/(shared)/icons';

import styles from './styles.module.css';

export const Header = () => (
    <header className={styles.header}>
        <div className={styles.headerWrapper}>
            <div className={styles.logoContainer}>
                <h2 className={styles.logo}>T4B</h2>
                <div>
                    <p className={styles.description}>Ставки на каналы </p>
                    <p className={styles.description}>в прямом эфире</p>
                </div>
            </div>
        </div>
        <div className={styles.title}>
            <div className={styles.titleWrapper}>
                <div className={styles.titleTextContainer}>
                    <span className={styles.titleText}>Ставки</span>
                    <BackgroundPatterIcon className={styles.titleBackground} />
                </div>
                на каналы
            </div>
            <div className={styles.purpleTitle}>стримеров:блогеров</div>
        </div>
    </header>
);
