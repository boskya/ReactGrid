var Reflux = require('reflux');
var React = require('react');
var _ = require('lodash');
var tasks = require('./tasksData');

var TasksStore = Reflux.createStore({
    getInitialState() {
        
        return {tasks};
    }
});

module.exports = TasksStore;
