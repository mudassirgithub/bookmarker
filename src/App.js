import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import AddModal from './components/AddModal/AddModal';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalVisible: false,
      bookmarks: [
        // {
        //   url: "https://coderhive.net/",
        //   icon: "https://coderhive.net/wp-content/uploads/2019/04/cropped-Logo-512px-square-with-bg-192x192.png",
        //   title: "Coding Bootcamp - CoderHive",
        //   description: "An immersive program that gives training, mentoring, environment and tools to launch your career as a Full Stack Developer in technology Startups."
        // }
      ]

    }
  }

  changeModalVisibility = (check) => {
    this.setState({
      isModalVisible: check
    })
  }

  addBookmark = (bookmark) => {
    this.setState(state => ({
      bookmarks: [...state.bookmarks, bookmark]
    }))
  }

  render () {
    return (
      <React.Fragment>
        <Header changeModalVisibility={this.changeModalVisibility} />
        <Main bookmarks={this.state.bookmarks}/>
        {this.state.isModalVisible && <AddModal changeModalVisibility={this.changeModalVisibility} addBookmark={this.addBookmark} />}
      </React.Fragment>
    )
  }
}

export default App
