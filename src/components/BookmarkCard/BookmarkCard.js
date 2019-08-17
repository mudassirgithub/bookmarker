import React from 'react'
import './BookmarkCard.css'

class BookmarkCard extends React.Component {
    render () {
        return (
            <a href="foo" target="_blank" className="BookmarkCard">
                Iam BookmarkCard
            </a>
        )
    }
}

export default BookmarkCard