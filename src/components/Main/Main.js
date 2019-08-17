import React from 'react'
import './Main.css'
import BookmarkCard from '../BookmarkCard/BookmarkCard';

class Main extends React.Component {
    render () {
        return (
            <main>
                <div className="bookmarkCardGroup">
                    <BookmarkCard />
                    <BookmarkCard />
                    <BookmarkCard />
                    <BookmarkCard />
                    <BookmarkCard />
                    <BookmarkCard />
                    <BookmarkCard />
                    <BookmarkCard />
                    <BookmarkCard />
                </div>
            </main>
        )
    }
}

export default Main