import React, { useState } from 'react'
import { useStateValue } from '../DataLayer'
import './HandleUser.css'

export default function AddUser() {
    const [{ users }, dispatch] = useStateValue()
    const [userName, setUserName] = useState('')

    const handleCancel = () => {
        dispatch({
            "type": "SET_ADD_USER_VISIBLE",
            "visible": false
        })
    }

    const handleAddUser = (e) => {
        e.preventDefault()
        const newID = users[users.length - 1].id + 1
        if (userName) {
            const newUser = {
                "id": newID,
                "image": "https://occ-0-2235-116.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSLII-o6GmYPFo09Nlv7D5jVLJGKsBJnZFzFAj82yk-WfGl7mV_vbCPIK5h65iTgGTs1dobHjU5Nlwc0EwKaty5KYhoV.png?r=a41",
                "name": userName,
                "watchedMovies": [],
                "myList": []
            }
            dispatch({
                "type": "ADD_USER",
                "user": newUser
            })
            handleCancel()
            setUserName('')
        } else {
            alert('Username invalid')
        }
    }

    return (
        <form onSubmit={handleAddUser}>
            <div className="handleUser">
                <div className="handleUser__form">
                    <p>Add Profile</p>
                    <div className="form">
                        <img src="https://occ-0-2235-116.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSLII-o6GmYPFo09Nlv7D5jVLJGKsBJnZFzFAj82yk-WfGl7mV_vbCPIK5h65iTgGTs1dobHjU5Nlwc0EwKaty5KYhoV.png?r=a41" alt="icon user" />
                        <input type="text" placeholder="Name" value={userName} onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className="button__container">
                        <div className="button__continue" onClick={handleAddUser}>Continue</div>
                        <div className="button__cancel" onClick={handleCancel}>Cancel</div>
                    </div>
                </div>
            </div>
        </form>
    )
}
