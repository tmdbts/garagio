import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './LegalNotice.module.scss';

const LegalNotice = (): React.ReactNode => {
    return (
        <div className={styles.legalNotice}>
            <Header />
            <main className={styles.content}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Aviso Legal</h1>
                </section>
                <p className={styles.description}>
                    Os conteúdos constantes neste website foram realizados por
                    alunos no âmbito de uma disciplina - Processos de Gestão e
                    de Inovação - do 3º ano da licenciatura em Engenharia
                    Informática da faculdade de Ciências e Tecnologia da
                    Universidade de Coimbra (FCTUC), pelo que a FCTUC não se
                    responsabiliza pelo seu conteúdo.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default LegalNotice;
