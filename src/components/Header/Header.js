import React from 'react'
import './Header.css'
import logo from './logo.png'
import plus from './plus-button.png'

class Header extends React.Component {
    handleClick = () => {
        this.props.changeModalVisibility(true)
    }

    render () {
        return (
            <header>
                <div className="logo">
                    <img src={logo} alt="Bookmarker" />
                </div>
                <div onClick={this.handleClick} className="plusButton">
                    <img src={plus} alt="plus icon" />
                </div>
            </header>
        )
    }
}

export default Header