import React from 'react'
import './Main.css'
import BookmarkCard from '../BookmarkCard/BookmarkCard';

class Main extends React.Component {
    render () {
        return (
            <main>
                <div className="bookmarkCardGroup">
                    <BookmarkCard />
                </div>
            </main>
        )
    }
}

export default Main