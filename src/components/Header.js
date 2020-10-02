import React, { useState } from 'react'
import { useStateValue } from '../DataLayer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGift, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import HeaderUser from './HeaderUser'

export default function Header() {
    const [{ user, users },dispatch] = useStateValue()
    const [blackHeader, setBlackHeader] = useState(false)
    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            setBlackHeader(false)
        } else {
            setBlackHeader(true)
        }
    })
    const handleClick = () => {
        dispatch({
            "type": "SELECT_USER",
            "id": -1
        })
    }
    return (
        <div className={(user && !blackHeader) ? "header header-user" : "header"}>
            <div className="header__image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png" alt="netflix logo" />
            </div>
            {user ?
                <div className="header__elements">
                    <p>Home</p>
                    <p>TV Shows</p>
                    <p>Movies</p>
                    <p>Latest</p>
                    <p>My list</p>
                </div> : ''}
            {user ?
                <div className="header__elements-right">
                    <span className="header__element">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <span className="header__element">
                        <FontAwesomeIcon icon={faGift} />
                    </span>
                    <span className="header__element">
                        <FontAwesomeIcon icon={faBell} />
                    </span>
                    <span className="header__element drop-trigger">
                        <div className="element__account">
                            <img src={user?.image} alt="profile" />
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                        <div className="element__dropdown">
                            <div className="dropdown__profiles">
                                {users.map((user, index) => (
                                    <HeaderUser user={user} key={index} />
                                ))}
                                <div className="dropdown__item pointer" onClick={handleClick}>
                                    <p>Manage Profiles</p>
                                </div>
                            </div>
                        </div>
                    </span>
                </div> : ''}
        </div>
    )
}
