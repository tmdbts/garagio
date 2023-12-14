import React from 'react';
import Header from '../../components/Header';
import styles from './Team.module.scss';
import teamPhoto from '../../assets/img.png';
import Footer from '../../components/Footer';

const Team = (): React.ReactNode => {
    return (
        <div className={styles.team}>
            <Header />
            <main className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>A equipa</h1>
                    <img
                        src={teamPhoto}
                        alt='All the elements of the project'
                        className={styles.image}
                    />
                </div>
                <p className={styles.description}>
                    Somos um grupo de estudantes de Engenharia Informática
                    unidos por um objetivo comum: criar um impacto significativo
                    no meio ambiente e na forma como consumimos. O nosso projeto
                    surgiu no âmbito da cadeira de Processos de Gestão e de
                    Inovação com o objetivo de ajudar a resolver um problema: o
                    excesso de objetos em bom estado que descartamos porque não
                    lhes damos uso, o que resulta num desperdício de itens que
                    poderiam ser reutilizados. Desenvolvemos uma aplicação que
                    facilita a organização e divulgação de vendas de garagem,
                    promovendo o conceito de up-cycling e incentivando práticas
                    sustentáveis.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Team;
