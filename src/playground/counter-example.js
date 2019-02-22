class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            name: 'Krystel'
        };
    }

    handleAddOne() {
        this.setState(prevState => {
            return {
                count: prevState.count += 1
            }
        });
        console.log('adding one');
    }

    handleMinusOne() {
        this.setState(prevState => {
            return {
                count: prevState.count -= 1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return(
            <div>
                <p>{this.state.name}</p>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

/* let count = 0;

const addOne = () => {
    count++;
    console.log('addOne', count);
    renderCounterApp();
};
const minusOne = () => {
    count--;
    console.log('minusOne', count);
    renderCounterApp();
};
const reset = () => {
    count = 0;
    console.log('reset', count);
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button id="my-id" className="button" onClick={addOne}>+1</button>
            <button id="my-id2" className="button" onClick={minusOne}>-1</button>
            <button id="my-id3" className="button" onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateThree, appRoot);
};

renderCounterApp(); */