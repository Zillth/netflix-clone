import React, { useState } from 'react'
import './ElementsRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import ProfileRowElement from './ProfileRowElement'

export default function ElementsRow({ title, elements }) {
    const [x, setX] = useState(0)
    const translate = {
        "-webkit-transform": `translate3d(-${x}%, 0px, 0px)`,
        "-ms-transform": `translate3d(-${x}%, 0px, 0px)`,
        "transform": `translate3d(-${x}%, 0px, 0px)`
    }
    
    const items = elements.map((element, index) => (
        <ProfileRowElement key={index} image={element.image}/>
    ))

    const handleNext = () => {
        if(x < 90) {
            setX(x + 45)
        }
    }

    const handlePrev = () => {
        setX(x - 45)
    }

    return (
        <div className="row__container">
            <h2 className="row__header">{title}</h2>
            <div className="slider">
                <span className="handle handlePrev" role="button" onClick={handlePrev}>
                    <FontAwesomeIcon icon={faAngleLeft} className="icon-choseImg" />
                </span>
                <div className="sliderMask showPeek">
                    <div className="sliderContent" style={translate}>
                        {items}
                    </div>
                </div>
                <span className="handle handleNext" role="button" onClick={handleNext}>
                    <FontAwesomeIcon icon={faAngleRight} className="icon-choseImg" />
                </span>
            </div>
        </div>
    )
}
