import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.clearSelectedOption}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            ariaHideApp={false}
            className="modal"
        >
            <h3 className="modal__title">Selected option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.clearSelectedOption}>Okay</button>
        </Modal>
    );
}

export default OptionModal;