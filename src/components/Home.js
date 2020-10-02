import React from 'react'
import Hero from './Hero'
import './Home.css'
import { movies } from '../data.json'
import MovieRow from './MovieRow'
import { useStateValue } from '../DataLayer'
import MovieInfo from './MovieInfo'

export default function Home() {
    const [{ user, movieInfo }] = useStateValue()
    return (
        <div className="home">
            {movieInfo.id? <MovieInfo />: ''}
            <div className="home__hero">
                <Hero />
            </div>
            <div className="home__movies">
                {user.watchedMovies.length > 0 ? <MovieRow movies={user.watchedMovies} title="Watched movies" /> : ''}
                {user.myList.length > 0 ? <MovieRow movies={user.myList} title="My List" /> : ''}
                <MovieRow movies={movies["Trending Now"]} title="Trending Now" />
                <MovieRow movies={movies.Comedies} title="Comedies" />
                <MovieRow movies={movies["Hallowen Favorites"]} title="Hallowen Favorites" />
            </div>
        </div>
    )
}
