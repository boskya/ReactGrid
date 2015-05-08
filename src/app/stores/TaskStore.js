var Reflux = require('reflux');
var React = require('react');
var _ = require('lodash');
var tasksSchema = require('./tasksSchema');
var tasksData = require('./tasksData');
var moment = require('moment');

var TasksStore = Reflux.createStore({

    getInitialState() {
        var tasks = { tasks: tasksData, schema: tasksSchema };
        return { tasks };
    }
});

module.exports = TasksStore;
