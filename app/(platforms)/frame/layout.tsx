import type { FC } from 'react';

import type { LayoutProps } from './types';

import styles from './styles.module.css';

const Layout: FC<LayoutProps> = ({ children }) => {
    return <main className={styles.layout}>{children}</main>;
};

export default Layout;
