import React from 'react'
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        const optionsValidated = !options ? [] : options;

        this.setState(() => ({
            options: optionsValidated
        }));   
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];

        this.setState(() => ({
            selectedOption: option
        }))
    };

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    };

    handleDeleteOption = optionToRemove => {
        this.setState(prevState => ({
            options: prevState.options.filter(option => optionToRemove !== option)
        }));
    };
    
    handleAddOption = option => {
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
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    };

    render() {
        const subtitle = 'Coding in React is great!!!';

        return (
            <div>
                <Header 
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.options && this.state.options.length > 0}
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
                 <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.handleClearSelectedOption}
                 />
            </div>
        );
    }
}

export default IndecisionApp;