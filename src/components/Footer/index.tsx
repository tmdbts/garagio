import React from 'react';
import styles from './Footer.module.scss';
import { IconBrandInstagram } from '@tabler/icons-react';

const Footer = (): React.ReactNode => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                &copy; 2021&nbsp;garagio. All rights reserved.
            </div>
            <div className={styles.socials}>
                <a
                    href='https://www.instagram.com/garagio.app/'
                    target='_blank'
                    className={styles.link}>
                    <IconBrandInstagram />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
