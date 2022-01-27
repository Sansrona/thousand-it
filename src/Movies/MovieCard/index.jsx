import React from 'react';
import styles from './movie.module.scss';
import { CircleProgress } from 'react-gradient-progress';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'



const MovieCard = ({ image, rating, date, name }) => {
  let colors = ['#1A8917', '#1A8917']
  const releaseDate = dayjs(date).locale('ru').format('DD MMM YYYY');

  if(rating < 7.0 && rating >=5.0){
    colors = ['#FFFF00','#FFFF00']
  } else if (rating < 5.0){
    colors= ['#FF0000','#FF0000']
  }

  return <div className={styles.movieCard}>
    <div className={styles.image_rating}>
      <img className={styles.image} src={`https://image.tmdb.org/t/p/w200${image}`} alt={`${name} poster`}></img>
      <div className={styles.circleProgress}>
        <CircleProgress
          width={70}
          percentage={rating * 10}
          strokeWidth={5}
          primaryColor={colors}
          secondaryColor="transparent"
          fill={'#000'}
          fontColor={'#fff'} />
      </div>
    </div>
    <p className={styles.movieName}>{name}</p>
    <p className={styles.movieDate}>{releaseDate}</p>
  </div>;
};

export default MovieCard;
