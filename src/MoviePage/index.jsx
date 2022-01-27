import React from 'react';
import { useParams } from 'react-router-dom';
import { moviesAPI } from '../moviesAPI';
import styles from './moviePage.module.scss';
import { CircleProgress } from 'react-gradient-progress';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = React.useState();
    const bgPoster = movie && {
        width: "50%",
        height: "max-content",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`,
        backgroundRepeat: "no-repeat",
    };
    let colors = ['#1A8917', '#1A8917']
    const rating = movie && movie.vote_average;
    const releaseDate = dayjs(movie?.release_date).locale('ru').format('DD MMM YYYY');

    console.log(movie);

    if (rating < 7.0 && rating >= 5.0) {
        colors = ['#FFFF00', '#FFFF00']
    } else if (rating < 5.0) {
        colors = ['#FF0000', '#FF0000']
    }

    React.useEffect(() => {
        moviesAPI.getMovie(id).then((response) => setMovie(response.data))
    }, [id])

    return <div className={styles.moviePage}>
        <ul className={styles.list}>
            <li className={styles.list_item}>Обзор &#x25BC;</li>
            <li className={styles.list_item}>Медиа &#x25BC;</li>
            <li className={styles.list_item}>Фэндом &#x25BC;</li>
            <li className={styles.list_item}>Поделиться &#x25BC;</li>
        </ul>
        {movie && <div className={styles.movieBlock} style={bgPoster} >
            <img className={styles.image} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.name} poster`}></img>
            <div className={styles.data}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h4 className={styles.original_title}>{movie.original_title}</h4>
                <h5 className={styles.tagline}>{movie.tagline}</h5>
                {movie.genres.map(genre => <i key={genre.id}>{genre.name.toUpperCase()}  </i>)}
                <div className={styles.votes}>
                    <CircleProgress
                        width={70}
                        percentage={rating * 10}
                        strokeWidth={5}
                        primaryColor={colors}
                        secondaryColor="transparent"
                        fill={'#000'}
                        fontColor={'#fff'} />
                    <p className={styles.voteCount}>Количество голосов: {movie.vote_count}</p>
                </div>
                <div className={styles.production}>
                    <p className={styles.productionCompany}>Произведено: {movie.production_companies.map((c, i) => <i key={c.id}>{c.name} </i>)}</p>
                    <p className={styles.productionBudget}>Бюджет фильма: {movie.budget} $</p>
                    <p className={styles.productionRevenue}>Общий доход фильма: {movie.revenue} $</p>
                </div>
                <p>Длительность фильма: {movie.runtime} мин.</p>
                <p className={styles.releaseDate}>Дата выхода фильма:  {releaseDate} года</p>
                <div className={styles.overview}>{movie.overview}</div>
            </div>
        </div>}
    </div>;
};

export default MoviePage;
