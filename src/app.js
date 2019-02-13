const appRoot = document.getElementById('app');
const user = {
    name: 'Eduardo',
    age: 27,
    location: 'Guadalajara'
};
const app = {
    title: 'Indecision App',
    subtitle: 'I prefer this rather than that...',
    options: []
};

function getLocation(userLocation) {
    if (userLocation) {
        return <p>Location: {userLocation}</p>
    }
}

const newTemplate = (
    <div>
        <h1>{user.name ? user.name : 'Unknown'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    // console.log('it works');
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    console.log(option);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle ? <p>{app.subtitle}</p> : undefined}
            {app.options.length > 0 ?  <p>Here are your options</p> :  <p>No options</p>}
            <p>{app.options.length}</p>
            <button id="make-decision" onClick={onMakeDecision}>What should I do?</button>
            <button id="remove-all" onClick={onRemoveAll}>Remove all</button>
            <ol>
                {
                    app.options.map((option, index) => <li key={index}>Option: {option}</li>)
                }
            </ol>
            <form onSubmit={getFormData}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

const getFormData = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        render();
    }

    console.log(app.options);
};

render();