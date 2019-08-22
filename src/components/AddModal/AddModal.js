import React from 'react'
import './AddModal.css'
import url from './url-white-x.png'
import axios from 'axios'
import Preview from '../Preview/Preview';

class AddModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            apiResponse: '',
            previewLoading: false,
            gotResponse: false,
            responseMsg: ''
        }
    }

    onChange = event => {
        this.setState({
            url: event.target.value,
            previewLoading: false,
            gotResponse: false
        })
    }

    postUrl = (event) => {
        event.preventDefault()
        this.setState({
            previewLoading: true,
            responseMsg: 'Loading...'
        })
        var url = {
            urlgot: this.state.url
        }
        axios
          .post('https://api-bookmarker.herokuapp.com/url', url)
            .then(res => {
                this.setState({ apiResponse: res.data.other, gotResponse: true })
                console.log(res.data.other)
            })
            .catch(err => {this.setState({responseMsg: "oops: cant connect"})})
    }

    saveUrl = () => {
        const new_bookmark = {
            url: this.state.url,
            icon: this.state.apiResponse.icon,
            title: this.state.apiResponse.title,
            description: this.state.apiResponse.description
        }
        console.log(new_bookmark)
        this.props.addBookmark(new_bookmark)
        this.props.changeModalVisibility(false)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        if (!this.node.contains(e.target)) {
            return (this.props.changeModalVisibility(false));
        }
    }

    render () {
        return (
            <div id="pageMask" >
                <div className="addUrlModal" role="dialog" ref={node => this.node = node}>
                    <form onSubmit={this.postUrl} className="addUrlInputGroup">
                        <div className="urlIcon">
                            <img src={url} alt="url icon" />
                        </div>
                        <input autoFocus onChange={this.onChange} required value={this.state.url} className="addUrlInput" type="text" name="url" placeholder="https://example.com/" />
                        {this.state.gotResponse
                            ?
                            <button onClick={this.saveUrl} type="button" className="modalButton">Save</button>
                            :
                            <button onClick={this.postUrl} type="button" className="modalButton">Load</button>
                        }
                    </form>
                    {this.state.previewLoading && <Preview other={this.state.apiResponse} gotResponse={this.state.gotResponse} responseMsg={this.state.responseMsg}/>}
                </div>
            </div>
        );
    }


}

export default AddModal