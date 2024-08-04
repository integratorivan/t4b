import type { FC } from 'react';

import { Header } from './parts/header';
import type { LayoutProps } from './types';

import styles from './styles.module.css';

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <main className={styles.main}>
                <Header />
                <div>{children}</div>
            </main>
            <footer className={styles.footer}>Footer work in progress</footer>
        </div>
    );
};

export default Layout;
