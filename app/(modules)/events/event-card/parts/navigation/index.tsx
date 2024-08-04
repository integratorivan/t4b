import { InfoIcon, QrCodeIcon, TelegramIcon, YoutubeIcon } from '$/app/(shared)/icons';

import styles from './styles.module.css';

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.icons}>
                <TelegramIcon />
                <QrCodeIcon />
                <YoutubeIcon />
            </div>
            <div
                onClick={(event) => {
                    event.preventDefault();
                    console.log(1);
                }}
            >
                <InfoIcon />
            </div>
        </div>
    );
};
