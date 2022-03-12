import React, {useEffect} from "react";
import { createPortal } from "react-dom";
import propTypes from "prop-types";
import { Overlay, ModalWrapper } from "../Modal/Modal.styled"

const modalRoot = document.querySelector('#modal-root')
export function Modal({ onClose, children }) {
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
    
    const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            onClose()
        };
    };

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose()
        };
    };
   
    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalWrapper>{children}</ModalWrapper>
        </Overlay>, modalRoot
    );
};

Modal.propTypes = {
    onClose: propTypes.func.isRequired,
};