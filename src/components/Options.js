import React from 'react';
import Option from '../components/Option';

const Options = (props) => {
    // console.log(props);
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header-title">Your Options</h3>
                <button 
                    className="button button_link"
                    onClick={props.handleDeleteOptions}
                >
                    Remove All
                </button>
            </div>
            {props.options.length === 0 && 
            <p className="widget-message">Please add an option to get started</p>}
            {
                 props.options.map((option, index) => 
                    <Option 
                        key={index} 
                        handleDeleteOption={props.handleDeleteOption} 
                        option={option}
                        count={index + 1}
                    />
                )
            }
        </div>
    );
};

export default Options;