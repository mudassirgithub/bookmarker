import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import AddModal from './components/AddModal/AddModal';


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }

  changeModalVisibility = (check) => {
    this.setState({
      isModalVisible: check
    })
  }

  render () {
    return (
      <React.Fragment>
        <Header changeModalVisibility={this.changeModalVisibility} />
        <Main />
        {this.state.isModalVisible && <AddModal changeModalVisibility={this.changeModalVisibility} />}
      </React.Fragment>
    )
  }
}

export default App
