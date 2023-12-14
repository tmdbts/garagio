import React from 'react';
import styles from './Events.module.scss';
import Header from '../../components/Header';
import EventCard from './EventCard.tsx';
import poster from '../../assets/first_event_poster.png';

const Events = (): React.ReactNode => {
    return (
        <div>
            <Header />
            <main className={styles.events}>
                <section className={styles.hero}>
                    <h1 className={styles.title}>Events</h1>
                    <h4 className={styles.subtitle}>
                        Criamos experiencias inesqueciveis
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
        </div>
    );
};

export default Events;
