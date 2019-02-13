let count = 0;

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

renderCounterApp();