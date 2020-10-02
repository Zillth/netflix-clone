import React from 'react'
import './Profile.css'
import './HandleUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../DataLayer'
import UpdateUser from './UpdateUser'
import ChosePicture from './ChosePicture'
import AddUser from './AddUser'

export default function Profile({ id, name, image, noUpdateIcon, updateVisible }) {
    const [{ updateElementVisible, chooseImgProfile, addUserVisible }, dispatch] = useStateValue()
    const style = {
        backgroundImage: `url(${image})`
    }
    const updateIcon = (
        <FontAwesomeIcon icon={faPen} className="icon" />
    )

    const handleClick = () => {
        if (id) {
            if (updateVisible) {
                dispatch({
                    "type": "SET_USER_TO_UPDATE",
                    "id": id
                })
                dispatch({
                    "type": "SET_UPDATE_ELEMENT_VISIBLE",
                    "visible": true
                })
            } else {
                dispatch({
                    "type": "SELECT_USER",
                    "id": id
                })
            }
        } else {
            dispatch({
                "type": "SET_ADD_USER_VISIBLE",
                "visible": true
            })
        }
    }
    return (
        <div>
            <div className="profile" onClick={handleClick}>
                <div className={updateVisible ? "profile__modify-icon visible" : "profile__modify-icon"}>
                    {!noUpdateIcon ? updateIcon : ''}
                </div>
                <div className="profile-icon" style={style}></div>
                <span className="profile-name">{name}</span>
            </div>
            {addUserVisible ? <AddUser /> : ''}
            {updateElementVisible ? <UpdateUser /> : ''}
            {chooseImgProfile ? <ChosePicture /> : ''}
        </div>
    )
}
