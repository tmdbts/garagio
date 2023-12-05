import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

const Header = (): React.ReactNode => {
    const [isOpen, { toggle }] = useDisclosure();

    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <a href='/' className={styles.link}>
                    <img
                        src={logo}
                        alt='Garagio logo'
                        className={styles.logo}
                    />
                </a>
                <Burger
                    opened={isOpen}
                    onClick={toggle}
                    className={styles.burger}
                />
            </div>
            <div className={`${styles.content} `} data-isOpen={isOpen}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.item}>
                            <a href='/' className={styles.link}>
                                Home
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href='/about/' className={styles.link}>
                                Sobre nós
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href='/team/' className={styles.link}>
                                A equipa
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
