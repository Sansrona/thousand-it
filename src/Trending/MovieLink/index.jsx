import React from 'react';
import styles from './movieLink.module.scss';
import { Link } from 'react-router-dom';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const MovieLink = ({ image, name, date, id, voteAverage, voteCount }) => {
    const releaseDate = dayjs(date).locale('ru').format('DD MMM YYYY');

    return <div className={styles.movieBlock}>
        <Link to={`/${id}`} className={styles.movieLink}>
            <img src={`https://image.tmdb.org/t/p/w400${image}`} alt={`${name} poster`}></img>
            <div className={styles.info}>
                <h1 className={styles.title}>{name}</h1>
                <div className={styles.meta}>
                    <h5 className={styles.date}>Дата выхода: {releaseDate}</h5>
                    <h5 className={styles.date}>Средняя оценка: {voteAverage}</h5>
                    <h5 className={styles.date}>Количество голосов: {voteCount}</h5>

                </div>
            </div>

        </Link>
    </div>
};

export default MovieLink;
