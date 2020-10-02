import React from 'react'
import './HandleUser.css'
import ElementsRow from './ElementsRow'
import { elementsIcons } from '../data.json'
import { useStateValue } from '../DataLayer'

export default function ChosePicture() {
    const [, dispatch] = useStateValue()
    const handleCancel = () => {
        dispatch({
            "type": "SET_CHOOSE_PICTURE_VISIBLE",
            "visible": false
        })
    }
    return (
        <div className="handleUser">
            <ElementsRow title="Chose a profile icon" elements={elementsIcons} />
            <div className="button__container">
                <div className="button__cancel" onClick={handleCancel}>Cancel</div>
            </div>
        </div>
    )
}
