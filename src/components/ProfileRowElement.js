import React from 'react'
import { useStateValue } from '../DataLayer'
import './ProfileRowElement.css'

export default function ProfileRowElement({ image }) {
    const [, dispatch] = useStateValue()
    const style = {
        "background-image": `url(${image})`
    }
    const handleClick = () => {
        dispatch({
            "type": "SET_PROFILE_IMAGE",
            "image": image
        })
        dispatch({
            "type": "SET_CHOOSE_PICTURE_VISIBLE",
            "visible": false
        })
    }
    return (
        <div className="slider-item" onClick={handleClick}>
            <button className="lolopi-icon" style={style}></button>
        </div>
    )
}
