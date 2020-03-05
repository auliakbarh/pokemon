import React, {Component} from "react";
import "../styles/modalCSS.css";

export default class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal" id="modal">
                <h2>{this.props.title ? this.props.title : "Modal Window"}</h2>
                <div className="content">{this.props.children}</div>
                <div className="actions">
                    <button className="toggle-button" onClick={this.onClose}>
                        {this.props.labelButton ? this.props.labelButton : "Close"}
                    </button>
                </div>
            </div>
        );
    }
}
