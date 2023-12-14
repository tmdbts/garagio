import React from 'react';
import { IconCalendarEvent } from '@tabler/icons-react';
import styles from './Events.module.scss';

type EventCardProps = {
    poster: string;
    title: string;
    date: string;
};

const EventCard = (props: EventCardProps): React.ReactNode => {
    return (
        <div className={styles.eventCard}>
            <img
                src={props.poster}
                alt='Cartaz III FIMCA'
                className={styles.poster}
            />
            <h3 className={styles.title}>{props.title}</h3>
            <h5 className={styles.date}>
                <IconCalendarEvent />
                <span className={styles.dateText}>{props.date}</span>
            </h5>
        </div>
    );
};

export default EventCard;
