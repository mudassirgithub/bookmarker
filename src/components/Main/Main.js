import React from 'react'
import './Main.css'
import BookmarkCard from '../BookmarkCard/BookmarkCard';

class Main extends React.Component {
    render() {
        const bookmark_cards = this.props.bookmarks.map((bookmark, i) => <BookmarkCard key={i} bookmark={bookmark}/>)
        return (
            <main>
                <div className="bookmarkCardGroup">
                    {bookmark_cards}
                </div>
            </main>
        )
    }
}

export default Main