import {React, Component} from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWrapper } from "../Modal/Modal.styled"
import propTypes from "prop-types";

const modalRoot = document.querySelector('#modal-root')
export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown',  this.handleKeyDown
        )
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown
        )
    };    
    
    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose()
        };
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose()
        };
    };

    render() {
            return createPortal(
        <Overlay onClick={this.handleBackdropClick}>
            <ModalWrapper>
                {this.props.children}
            </ModalWrapper>
        </Overlay>, modalRoot)
    };
};

Modal.propTypes = {
    onClose: propTypes.func.isRequired,
};