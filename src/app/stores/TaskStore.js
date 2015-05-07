var Reflux = require('reflux');
var React = require('react');

var tasks = [
    {
        "Title": "deskdocs"
    },
    {
        "Title": "some other deskdocs"
    }
];

var TasksStore = Reflux.createStore({

    getInitalState() {
        return {tasks};
    }
});

module.exports = TasksStore;
