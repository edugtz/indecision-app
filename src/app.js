class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Coding in React is great';
        const options = [ 'One', 'Two', 'Three' ];

        return (
            <div>
                <Header 
                    title={title}
                    subtitle={subtitle}
                />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        // console.log(this.props);
        return (
                <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        console.log('Someone clicked the button');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
           </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        console.log('removing option');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option, index) => <Option key={index} option={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return(
            <p>{this.props.option}</p>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form action="">
                    <input type="text"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<IndecisionApp />, appRoot);