var Reflux = require('reflux');
var React = require('react');
var person = {
    "name": "Dr. Blaze Hane",
    "age": "30",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/picard102/128.jpg"
};

var actions = Reflux.createActions(
    ["updateAge"]
)

var store = Reflux.createStore({
    listenables: [actions],

    onUpdateAge(){
        person.age = Math.random() * 100;
        this.trigger({person});
    },

    getInitialState() {
        return {person};
    }
});

var App = React.createClass({

    mixins: [Reflux.connect(store)],

    render() {
        var p = this.state.person;
        return (<div>

            <h2>{p.name}</h2>
            <h2 onClick={actions.updateAge}>{p.age}</h2>
            <img src={p.avatar}/>

        </div>);
    }
})

module.exports = App;
