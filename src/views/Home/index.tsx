import React from 'react';
import Header from '../../components/Header';
import { Button } from '@mantine/core';
import styles from './Home.module.scss';
import illustration from '../../assets/home_illustration.png';
import Footer from '../../components/Footer';

const Home = (): React.ReactNode => {
    return (
        <div className={styles.home}>
            <Header />
            <main className={styles.hero}>
                <div className={styles.wrapper}>
                    <p className={styles.description}>
                        Dê um novo lar ao que não precisa e encontre o que
                        procura - organize ou descubra vendas de garagem com a
                        nossa aplicação.
                    </p>
                    <Button radius='xl' className={styles.cta}>
                        SAIBA MAIS
                    </Button>
                    <img
                        src={illustration}
                        alt='Illustrations of a garage sale'
                        className={styles.image}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
