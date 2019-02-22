class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        console.log('Fetching data');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('Saving data');
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
            // console.log('Not a valid option');
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
        const subtitle = 'Coding in React is great';

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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

/* Default props for a component */
Header.defaultProps = {
    title: 'Indecision'
};

IndecisionApp.defaultProps = {
    options: []
}


const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?</button>
       </div>
    )
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
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

const Option = (props) => {
    return(
        <div>
            <b>{props.option}</b>
            &nbsp;<button onClick={() => props.handleDeleteOption(props.option)}>Remove</button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);
        // e.target.elements.option.value = '';
        this.setState(() => {
            return {
                error
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp options={['One', 'Two']} />, document.getElementById('app'));