import ReactDOM from 'react-dom';
import React from 'react'
import IndecisionApp from "./components/IndecisionApp";

class Old {
    state = 20;
    console.log(state);
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));