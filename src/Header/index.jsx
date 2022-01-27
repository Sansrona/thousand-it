import React from 'react';
import styles from './header.module.scss';


const Header = () => {
    return <header className={styles.header}>
        Что популярно
        <div className={styles.switcher}>
            <p className={styles.switcher__TV}>По ТВ</p>
            <p className={styles.switcher__cinema}>В кинотеатрах</p>
        </div>
    </header>;
};

export default Header;
