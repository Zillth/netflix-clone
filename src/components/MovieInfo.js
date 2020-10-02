import React from 'react'
import './MovieInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../DataLayer'

export default function MovieInfo() {
    const [{ movieInfo }, dispatch] = useStateValue()

    const handleClose = () => {
        dispatch({
            "type": "SET_MOVIE_INFO",
            "movie": {}
        })
    }

    const handlePlay = () => {
        dispatch({
            "type": "ADD_TO_WATCHED",
            "movie": movieInfo
        })
        handleClose()
    }

    const handleAdd = () => {
        dispatch({
            "type": "ADD_TO_MYLIST",
            "movie": movieInfo
        })
        handleClose()
    }

    return (
        <div className="movieInfo">
            <FontAwesomeIcon  icon={faTimes} className="movieInfo__close" onClick={handleClose}/>
            <div className="movieInfo__image">
                <img src={movieInfo.image} alt={movieInfo.title} />
            </div>
            <div className="movieInfo__buttons">
                <div className="play__button circle" onClick={handlePlay}>
                    <FontAwesomeIcon icon={faPlay} /> Play
                </div>
                <div className="play__button circle" onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlus} /> Add to myList
                </div>
            </div>
            <div className="movieInfo__title">
                <p>{movieInfo.title}</p>
            </div>
        </div>
    )
}
