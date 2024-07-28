'use client';

import { useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className={styles.tabs}>
            <button
                onClick={() => handleTabClick(0)}
                className={clsx(styles.tab, activeTab === 0 && styles.active)}
                type="button"
            >
                Micro
            </button>
            <button
                onClick={() => handleTabClick(1)}
                className={clsx(styles.tab, activeTab === 1 && styles.active)}
                type="button"
            >
                Live
            </button>
            <button
                onClick={() => handleTabClick(2)}
                className={clsx(styles.tab, activeTab === 2 && styles.active)}
                type="button"
            >
                Prematch
            </button>
        </div>
    );
};
