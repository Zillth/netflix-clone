import React, { useState } from 'react'
import { useStateValue } from '../DataLayer'
import './HandleUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default function UpdateUser() {
    const [{ userToUpdate }, dispatch] = useStateValue()
    const [userName, setUserName] = useState(userToUpdate.name)

    const handleCancel = () => {
        dispatch({
            "type": "SET_UPDATE_ELEMENT_VISIBLE",
            "visible": false
        })
    }

    const handleChoseImg = () => {
        dispatch({
            "type": "SET_CHOOSE_PICTURE_VISIBLE",
            "visible": true
        })
    }

    const handleUpdateUser = (e) => {
        e.preventDefault()
        dispatch({
            "type": "UPDATE_USER",
            "id": userToUpdate.id,
            "userUpdated": {
                "id": userToUpdate.id,
                "image": userToUpdate.image,
                "name": userName
            }
        })
        handleCancel()
    }

    const handleDelete = () => {
        dispatch({
            "type": "DELETE_USER",
            "id": userToUpdate.id
        })
        handleCancel()
    }

    return (
        <form onSubmit={handleUpdateUser}>
            <div className="handleUser">
                <div className="handleUser__form">
                    <p>Edit Profile</p>
                    <div className="form">
                        <div className="image__container" onClick={handleChoseImg}>
                            <FontAwesomeIcon icon={faPencilAlt} className="icon" />
                            <img src={userToUpdate.image} alt="icon user" />
                        </div>
                        <input type="text" placeholder="Name" value={userName} onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className="button__container">
                        <div className="button__continue" onClick={handleUpdateUser}>Save</div>
                        <div className="button__cancel" onClick={handleCancel}>Cancel</div>
                        <div className="button__cancel" onClick={handleDelete}>Delete Profile</div>
                    </div>
                </div>
            </div>
        </form>
    )
}
