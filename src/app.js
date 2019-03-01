import ReactDOM from 'react-dom';
import React from 'react'
import IndecisionApp from "./components/IndecisionApp";
import './styles/styles.scss';

const Layout = props => {
    return (
      <div>
          <p>header</p>
          {props.children}
          <p>footer</p>
      </div>
    );
}

const Template = () => {
   return (
        <div>
            <h1>Page title</h1>
            <p>This is my page</p>
        </div>
   );
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));