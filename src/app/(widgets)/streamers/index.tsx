import { StreamerCard } from './streamer-card';
import type { StreamersProps } from './types';

import styles from './styles.module.css';

export const Streamers = ({ streamers }: StreamersProps) => {
    return (
        <div className={styles.streamers}>
            {streamers.map((item, index) => (
                <StreamerCard key={index} {...item} />
            ))}
        </div>
    );
};
