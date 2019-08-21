import React from 'react'
import './BookmarkCard.css'
import dribble from './dribble.png'

class BookmarkCard extends React.Component {
    render () {
        return (
            <a href="foo" target="_blank" className="BookmarkCard">
                <div className="bookmarkImage">
                    <img src={dribble} alt="dribble png" />
                </div>
                <div className="bookmarkTitle">
                    Iam the title of the bookmark, Iam the title of the bookmark, Iam the title of the bookmark

                </div>
                <div className="bookmarkDes">
                    I am the Description of the bookmark, I am the Description of the bookmark
                </div>
            </a>
        )
    }
}

export default BookmarkCard