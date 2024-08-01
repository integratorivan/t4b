'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EventCard } from '$/app/(modules)/events/event-card';

import { EventButton } from './event-button';

import styles from './styles.module.css';

export const Events = () => (
    <div className={styles.events}>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView="auto"
            slideClass="swiper-slide"
        >
            {[
                'Counter-Strike 2',
                'Мир танков',
                'Valorant',
                'Dota 2',
                'Game',
                'Game',
                'Valorant',
                'Game',
                'Game',
                'Valorant',
                'Game',
                'Counter-Strike 2',
                'Game',
            ].map((i, el) => (
                <SwiperSlide key={el}>
                    <EventButton title={String(i)} />
                </SwiperSlide>
            ))}
        </Swiper>
        <div className={styles.eventsCards}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    </div>
);
