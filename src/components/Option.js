
import React from 'react';

const Option = (props) => {
    return(
        <div className="option">
            <p className="option-text">{props.count}. {props.option}</p>
            <button 
                className="button button_link"
                onClick={() => props.handleDeleteOption(props.option)}
            >
            Remove
            </button>
        </div>
    );
}

export default Option;