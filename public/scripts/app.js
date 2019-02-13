'use strict';

var appRoot = document.getElementById('app');
var user = {
    name: 'Eduardo',
    age: 27,
    location: 'Guadalajara'
};
var app = {
    title: 'Indecision App',
    subtitle: 'I prefer this rather than that...',
    options: []
};

function getLocation(userLocation) {
    if (userLocation) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            userLocation
        );
    }
}

var newTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Unknown'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    // console.log('it works');
    var randomNumber = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNumber];
    console.log(option);
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle ? React.createElement(
            'p',
            null,
            app.subtitle
        ) : undefined,
        app.options.length > 0 ? React.createElement(
            'p',
            null,
            'Here are your options'
        ) : React.createElement(
            'p',
            null,
            'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { id: 'make-decision', onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { id: 'remove-all', onClick: onRemoveAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    'Option: ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: getFormData },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var getFormData = function getFormData(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        render();
    }

    console.log(app.options);
};

render();
