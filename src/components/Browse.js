import React from 'react'
import { useStateValue } from '../DataLayer'
import Home from './Home'
import SelectUser from './SelectUser'

export default function Browse() {
    const [{ user }] = useStateValue()
    return (
        <div>
            {!user ? <SelectUser /> : <Home />}
        </div>
    )
}
