import React from 'react'
import AddOption from "../components/AddOption";
import Options from "../components/Options";
import Action from "../components/Action";
import Header from '../components/Header';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        this.setState(() => ({
            options
        }));  
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];

        console.log(option);
    }

    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState(prevState => ({
            options: prevState.options.filter(option => optionToRemove !== option)
        }));
    }
    
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value';
        } else if (this.state.options.indexOf(option) >= 0) {
            return 'This option already exists';
        }

        this.setState(prevState => {
            return {
                options: prevState.options.concat([ option ])
            }
        });
    }

    render() {
        const subtitle = 'Coding in React is great!!!';

        return (
            <div>
                <Header 
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                 />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                 />
            </div>
        );
    }
}

export default IndecisionApp;