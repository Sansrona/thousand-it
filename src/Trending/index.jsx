import React, { useState, useEffect } from 'react';
import { moviesAPI } from '../moviesAPI';
import MovieLink from './MovieLink';

const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [totalCount, setTotalCount] = useState(0);
    console.log(movies.length, totalCount);
    useEffect(() => {
        if (fetching) {
            moviesAPI.getTopRatedMovies(currentPage)
                .then(response => {
                    setMovies([...movies, ...response.data.results])
                    setCurrentPage(prevPage => prevPage + 1);
                    setTotalCount(response.data.total_results)
                })
                .finally(() => setFetching(false))
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleScroll = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return <div>
        {movies.map(movie => {
            return <MovieLink key={movie.id} id={movie.id} voteAverage={movie.vote_average} voteCount={movie.vote_count} image={movie.poster_path} name={movie.title} date={movie.release_date} />
        })}
    </div>;
};

export default Trending;
