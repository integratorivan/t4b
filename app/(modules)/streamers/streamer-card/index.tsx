'use client';

import Image from 'next/image';
import Link from 'next/link';

import { InfoIcon, QrCodeIcon, TelegramIcon, YoutubeIcon } from '$/app/(shared)/icons';

import styles from './styles.module.css';

export const StreamerCard = ({ title, description }: { description: string; title: string }) => {
    return (
        <Link href="/telegram" className={styles.streamerCard}>
            <Image
                className={styles.image}
                src="/bb.png"
                alt="canal logo"
                width={285}
                height={260}
            />
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <div className={styles.footer}>
                <div className={styles.leftIcons}>
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
        </Link>
    );
};
