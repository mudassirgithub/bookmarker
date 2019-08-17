import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import AddModal from './components/AddModal/AddModal';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalVisible: true
    }
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <Main />
        {this.state.isModalVisible && <AddModal />}
      </React.Fragment>
    )
  }
}

export default App
