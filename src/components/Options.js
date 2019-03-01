import React from 'react';
import Option from '../components/Option';

const Options = (props) => {
    // console.log(props);
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                 props.options.map((option, index) => 
                    <Option 
                        key={index} 
                        handleDeleteOption={props.handleDeleteOption} 
                        option={option}
                    />
                )
            }
        </div>
    );
};

export default Options;