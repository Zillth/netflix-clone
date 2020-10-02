import React from 'react'
import { useStateValue } from '../DataLayer'

export default function HeaderUser({ user }) {
    const [, dispatch] = useStateValue()
    const handleClick = async () => {
        await dispatch({
            "type": "SELECT_USER",
            "id": -1
        })
        dispatch({
            "type": "SELECT_USER",
            "id": user.id
        })
    }
    return (
        <div className="dropdown__item pointer" onClick={handleClick}>
            <img src={user.image} alt={user.name} />
            <p>{user.name}</p>
        </div>
    )
}
