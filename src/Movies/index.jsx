import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import MovieCard from './MovieCard/';
import styles from './swiper.module.scss';

import { moviesAPI } from '../moviesAPI';

const SwiperFC = () => {

    const [data, setData] = React.useState([]);
  React.useEffect(() => {
    moviesAPI.getPopularMovies().then(l => setData(l.data.results))
  }, [])
  return(
    <Swiper
    className={styles.swiper}
    modules={[Navigation, Autoplay, Scrollbar, Mousewheel]}
    spaceBetween={50}
    slidesPerView={7}
    navigation
    grabCursor={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    scrollbar={{ draggable: true }}
    breakpoints={{
      "320":{
        "slidesPerView": 1,
      },
      "360":{
        "slidesPerView": 1,
      },
      "500":{
        "slidesPerView": 2,
        "spaceBetween": 20
      },
      "640": {
        "slidesPerView": 3,
        "spaceBetween": 20
      },
      "768": {
        "slidesPerView": 3,
        "spaceBetween": 40
      },
      "1024": {
        "slidesPerView": 5,
        "spaceBetween": 50
      },
      "1200": {
        "slidesPerView": 6,
        "spaceBetween": 50
      }
    }}>
    {data.map(movie => (
      <SwiperSlide key={movie.id}>
        <MovieCard
          image={movie.poster_path}
          rating={movie.vote_average}
          date={movie.release_date}
          name={movie.title} />
      </SwiperSlide>))}
  </Swiper>
  );
};

export default SwiperFC;
