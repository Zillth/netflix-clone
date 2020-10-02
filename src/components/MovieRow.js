import React from 'react'
import './MovieRow.css'
import Slider from 'infinite-react-carousel'
import Movie from './Movie'

export default function MovieRow({ movies, title }) {
    const settings = {
        arrowsScroll: 6,
        duration: 300,
        slidesToShow: Math.trunc(window.innerWidth / 200)
    } 
    const items = movies.map((movie, index) => (
        <Movie key={index} title={movie.title} image={movie.image} id={movie.id} />
    ))
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <Slider {...settings}> {items} </Slider>
        </div>
    )
}
