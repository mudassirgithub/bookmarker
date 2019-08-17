import React from 'react'
import './AddModal.css'
import url from './url-white-x.png'

class AddModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <div id="pageMask" >
                <div className="addUrlModal" role="dialog" ref={node => this.node = node}>
                    <form className="addUrlInputGroup">
                        <div className="urlIcon">
                            <img src={url} alt="url icon" />
                        </div>
                        <input autoFocus onChange={this.onChange} required value={this.state.url} className="addUrlInput" type="text" name="url" placeholder="add url here..." />
                        <button type="submit" className="modalButton">SAVE</button>
                    </form>
                    <div className="urlPreview">
                    </div>    
                </div>
            </div>
        );
    }


}

export default AddModal