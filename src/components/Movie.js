import React from 'react'
import './Movie.css'
import { useStateValue } from '../DataLayer'

export default function Movie({ id, title, image }) {
    const [, dispatch] = useStateValue()

    const handleClick = () => {
        dispatch({
            "type": "SET_MOVIE_INFO",
            "movie": {
                "id": id,
                "title": title,
                "image": image
            }
        })
    }

    return (
        <div className="movie" onClick={handleClick}>
            <div className="movie__image">
                <img src={image} alt={title} />
            </div>
        </div>
    )
}
