import React from 'react'
import './BookmarkCard.css'

class BookmarkCard extends React.Component {
    render () {
        return (
            <a href={this.props.bookmark.url} target="_blank" rel="noopener noreferrer" className="BookmarkCard">
                <div className="bookmarkImage">
                    <img src={this.props.bookmark.icon} alt="url" />
                </div>
                <div className="bookmarkTitle">
                    {this.props.bookmark.title}
                </div>
                <div className="bookmarkDes">
                    {this.props.bookmark.description.substring(0,100).concat('...')}
                </div>
            </a>
        )
    }
}

export default BookmarkCard