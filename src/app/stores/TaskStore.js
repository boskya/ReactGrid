var Reflux = require('reflux');
var React = require('react');

var tasks = [
    {
        "Title": "deskdocs"
    },
    {
      "Title": "deskdocs 2"      
    }
    ];

var TasksStore = Reflux.createStore({
  getInitialState() {
        return {tasks};
    }
});

module.exports = TasksStore;
