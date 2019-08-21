import React from 'react'
import './Preview.css'

class Preview extends React.Component {
    render () {
        return (
            <React.Fragment>
            {this.props.gotResponse
                ? 
                <div className="preview">
                    <div className="previewImage">
                        <img src={this.props.other.icon} alt="url" />
                    </div>
                    <div className="previewTitle">
                        {this.props.other.title}
                    </div>
                    <div className="previewDes">
                        {this.props.other.description}
                    </div> 
                </div>
                :
                <div className="previewLoading">{this.props.responseMsg}</div>
            }
            </React.Fragment>
        )
    }
}

export default Preview