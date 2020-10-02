import React from 'react'
import './Hero.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../DataLayer'

export default function Hero() {
    const [, dispatch] = useStateValue()
    const handlePlay = () => {
        dispatch({
            "type": "ADD_TO_WATCHED",
            "movie": {
                "id": 41,
                "title": "Enola Holmes",
                "image": "https://occ-0-2235-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV5yoaDZOICfCKxu3kWNYkPpkc5z5P_2fpY2I4jRrJ4WThCWSavPH8ebOKZirv_xcT-6lUXJ6FRj_AZ2Qxxm8WVPDga6.webp?r=f6a"
            }
        })
    }
    return (
        <div className="hero">
            <img src="https://occ-0-2235-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV5yoaDZOICfCKxu3kWNYkPpkc5z5P_2fpY2I4jRrJ4WThCWSavPH8ebOKZirv_xcT-6lUXJ6FRj_AZ2Qxxm8WVPDga6.webp?r=f6a" alt="holmes sister" />
            <div className="hero__description">
                <div className="hero__title">
                    <img src="https://occ-0-2235-116.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSIez8rsu-Y6SMMgv3CviwIsGKFurvXdryHBYfQ3qxvzlO4AQBFIvkUJ_asVA_l5Xm3DDANKPJxlyQUgPAgIzXhh05o7lNI4cxKZhiMuUTLbftjZNbwA-0oMTvRtrdsNGMdGjkvtzl1YMH3YXoHdp8GoHaGdBgl-0rTIyaxQArsCBQ.webp?r=6f5" alt="enola film" />
                </div>
                <div className="hero__info">
                    <p>While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.</p>
                </div>
                <div className="hero__buttons">
                    <div className="play__button" onClick={handlePlay}><FontAwesomeIcon icon={faPlay} /> Play</div>
                </div>
            </div>
        </div>
    )
}
