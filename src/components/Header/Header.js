import React from 'react'
import './Header.css'
import logo from './logo.png'
import plus from './plus-button.png'

class Header extends React.Component {
    render () {
        return (
            <header>
                <div className="logo">
                    <img src={logo} alt="Bookmarker" />
                </div>
                <div className="plusButton">
                    <img src={plus} alt="plus icon" />
                </div>
            </header>
        )
    }
}

export default Header