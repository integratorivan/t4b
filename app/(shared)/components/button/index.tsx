import type { ButtonHTMLAttributes, FC } from 'react';

import styles from './styles.module.css';

export type ButtonProps = {
    variant: 'primary' | 'secondary' | 'transparent';
    size?: 'sm' | 'md' | 'lg';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
    <button
        className={styles.button}
        data-size={props.size}
        data-variant={props.variant}
        {...props}
    >
        {children}
    </button>
);
