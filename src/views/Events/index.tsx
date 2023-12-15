import React from 'react';
import styles from './Events.module.scss';
import Header from '../../components/Header';
import EventCard from './EventCard.tsx';
import poster from '../../assets/first_event_poster.png';
import Footer from '../../components/Footer';

const Events = (): React.ReactNode => {
    return (
        <div className={styles.events}>
            <Header />
            <main className={styles.content}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Eventos</h1>
                    <h4 className={styles.subtitle}>
                        Criamos experiências inesquecíveis
                    </h4>
                </section>
                <section className={styles.eventsList}>
                    <EventCard
                        poster={poster}
                        title={'1st Garage Sale'}
                        date={'14 de dezembro'}
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Events;
