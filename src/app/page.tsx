import styles from './page.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.logoContainer}>
                    <h2 className={styles.logo}>T4B</h2>
                    <div>
                        <p className={styles.description}>Ставки на каналы </p>
                        <p className={styles.description}>в прямом эфире</p>
                    </div>
                </div>
                <div className={styles.tabs}>
                    <button type="button">Главная</button>
                    <button type="button">Каналы</button>
                    <button type="button">События</button>
                </div>
                <div />
            </div>
            <div className={styles.title}>
                <div className={styles.titleWrapper}>
                    <div className={styles.titleTextContainer}>
                        <span className={styles.titleText}>Ставки</span>
                        <svg
                            className={styles.titleBackground}
                            width="501"
                            height="126"
                            viewBox="0 0 501 126"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22 78.8561C30.9171 78.0515 108.198 43.6546 145.724 26.5567L92.7782 104L266.105 26.5567C243.069 52.3711 201.456 104 201.456 104C201.456 104 292.856 52.3711 336.327 26.5567C318.864 48.6834 289.593 104 289.593 104C289.593 104 382.027 46.8087 426.612 22L383.141 104L479 41.6431"
                                stroke="#C2EA6D"
                                stroke-width="43"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    на каналы
                </div>
                <div className={styles.purpleTitle}>стримеров : блогеров</div>
            </div>
        </header>
    );
};

const Home = () => {
    return (
        <main className={styles.main}>
            <Header />
        </main>
    );
};

export default Home;
