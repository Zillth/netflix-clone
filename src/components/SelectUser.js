import React, { useState } from 'react'
import { useStateValue } from '../DataLayer'
import Profile from './Profile'
import './SelectUser.css'

export default function SelectUser() {
    const [{ users }] = useStateValue()
    const [updateVisible, setUpdateVisible] = useState(false)
    const handleManage = () => {
        setUpdateVisible(!updateVisible)
    }

    const profiles = users.map((user, index) => (
        <Profile key={index} id={user.id} name={user.name} image={user.image} updateVisible={updateVisible} />
    ))
    return (
        <div className='browse'>
            <p>Who's watching?</p>
            <div className="browse__users">
                {profiles}
                {users.length < 5 ? <Profile image="/plus-icon.png" name="Add Profile" noUpdateIcon/>: ''}
            </div>
            <div className="browse__admin">
                {updateVisible? <span className="admin__done" onClick={handleManage}>DONE</span> : <span onClick={handleManage}>MANAGE PROFILES</span>}
            </div>
        </div>
    )
}
