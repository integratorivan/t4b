import type { FC } from 'react';

import styles from './styles.module.css';

export const EventButton: FC<EventButtonProps> = ({ title }) => {
    return (
        <div className={styles.eventButton}>
            <div className={styles.eventButtonIcon} />
            <p className={styles.eventButtonText}>{title}</p>
        </div>
    );
};
