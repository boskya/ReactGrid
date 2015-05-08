var Reflux = require('reflux');
var React = require('react');
var _ = require('lodash');
var tasks = require('./tasksData');
var moment = require('moment');

var TasksStore = Reflux.createStore({

    getInitialState() {
        tasks.tasks = tasks.tasks.map(function (t) {
            if(t.PlannedFinish) { t.PlannedFinish = moment(t.PlannedFinish).format('YYYY-MM-DD'); }
            if(t.PlannedStart) { t.PlannedStart = moment(t.PlannedStart).format('YYYY-MM-DD'); }
            if(t.ActualStart) { t.ActualStart = moment(t.ActualStart).format('YYYY-MM-DD'); }
            if(t.ActualFinish) { t.ActualFinish = moment(t.ActualFinish).format('YYYY-MM-DD'); }
            return t;
        });
        return {tasks};
    }
});

module.exports = TasksStore;
