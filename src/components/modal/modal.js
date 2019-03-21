import React from "react";

class Modal extends React.Component {
    render()
    {
        return(<div>
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        </div>);
    }
}

export default Modal;
