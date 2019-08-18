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

    componentWillMount() {
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
                    <form className="addUrlInputGroup">
                        <div className="urlIcon">
                            <img src={url} alt="url icon" />
                        </div>
                        <input autoFocus onChange={this.onChange} required value={this.state.url} className="addUrlInput" type="text" name="url" placeholder="add url here..." />
                        <button type="submit" className="modalButton">SAVE</button>
                    </form>
                </div>
            </div>
        );
    }


}

export default AddModal