import React from 'react';

const Option = (props) => {
    return(
        <div>
            <b>{props.option}</b>
            &nbsp;<button onClick={() => props.handleDeleteOption(props.option)}>Remove</button>
        </div>
    );
}

export default Option;