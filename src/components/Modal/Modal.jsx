import {React, Component} from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWrapper } from "../Modal/Modal.styled"
import propTypes from "prop-types";
import { useEffect } from "react/cjs/react.development";

const modalRoot = document.querySelector('#modal-root')


export function Modal({ onClose, children }) {
    
    useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    })
    
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
            <ModalWrapper>
                {children}
            </ModalWrapper>
        </Overlay>, modalRoot)


};
// export class Modal extends Component {

//     componentDidMount() {
//         window.addEventListener('keydown',  this.handleKeyDown
//         )
//     };

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown
//         )
//     };    
    
//     handleKeyDown = (e) => {
//         if (e.code === 'Escape') {
//             this.props.onClose()
//         };
//     };

//     handleBackdropClick = event => {
//         if (event.currentTarget === event.target) {
//             this.props.onClose()
//         };
//     };

//     render() {
//             return createPortal(
//         <Overlay onClick={this.handleBackdropClick}>
//             <ModalWrapper>
//                 {this.props.children}
//             </ModalWrapper>
//         </Overlay>, modalRoot)
//     };
// };

Modal.propTypes = {
    onClose: propTypes.func.isRequired,
};