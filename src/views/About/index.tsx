import React from 'react';
import styles from './About.module.scss';
import Header from '../../components/Header';
import photoOne from '../../assets/path3.png';
import photoTwo from '../../assets/path9.png';
import photoThree from '../../assets/path103.png';

const About = (): React.ReactNode => {
    return (
        <div className={styles.about}>
            <Header />
            <main className={styles.main}>
                <div className={styles.column}>
                    <h2 className={styles.title}>Compras</h2>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <h3 className={styles.title}>Poupe</h3>
                            <p className={styles.description}>
                                Encontre o que procura pelos preços mais baixos
                                -- e não pague portes de envio!
                            </p>
                        </div>
                        <div className={styles.item}>
                            <h3 className={styles.title}>Verifique</h3>
                            <p className={styles.description}>
                                verifique a qualidade dos produtos mesmo antes
                                de comprar.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <h3 className={styles.title}>Desfrute</h3>
                            <p className={styles.description}>
                                aprecie uma experiência única e interpessoal.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.column} ${styles.imageColumn}`}>
                    <div className={styles.item}>
                        <img
                            src={photoOne}
                            alt='photoOne'
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.item}>
                        <img
                            src={photoTwo}
                            alt='photoTwo'
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.item}>
                        <img
                            src={photoThree}
                            alt='photoThree'
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.column}>
                    <h2 className={styles.title}>Vendas</h2>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <h3 className={styles.title}>Liberte Espaço</h3>
                            <p className={styles.description}>
                                livre-se do que não precisa e abra espaço na sua
                                casa.
                            </p>
                        </div>
                        <div className={styles.item}>
                            <h3 className={styles.title}>Venda Diretamente</h3>
                            <p className={styles.description}>
                                processe a sua venda de forma segura e
                                instantânea -- sem necessidade de envio!
                            </p>
                        </div>
                        <div className={styles.item}>
                            <h3 className={styles.title}>Encha o Bolso</h3>
                            <p className={styles.description}>
                                venda a sua tralha e lucre com isso.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;
