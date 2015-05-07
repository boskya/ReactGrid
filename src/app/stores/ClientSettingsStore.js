var Reflux = require('reflux');
var React = require('react');


var clientSettings = {
  taskGridSettings : {
    col: {
        "Name": "Number",
        "Order": 1
    },
    col: {
        "Name": "Title",
        "Order": 2
    },
    col: {
        "Name": "ActualFinish",
        "Order": 3
    },
    col: {
        "Name": "ActualStart",
        "Order": 4
    },
    col: {
        "Name": "Assignments",
        "Order": 5
    },
    col: {
        "Name": "DurationMinutes",
        "Order": 6
    },
    col: {
        "Name": "OnHold",
        "Order": 7
    },
    col: {
        "Name": "OutlineNumber",
        "Order": 8
    },
    col: {
        "Name": "PercentComplete",
        "Order": 9
    },
    col:{
        "Name": "PlannedFinish",
        "Order": 10
    },
    col:{
        "Name": "PlannedStart",
        "Order": 11
    },
    col:{
        "Name": "Priority",
        "Order": 12
    },
    col:{
        "Name": "Status",
        "Order": 13
    },
    col:{
        "Name": "TaskType",
        "Order": 14
    }
  }
};

var ClientSettingsStore = Reflux.createStore({
  getInitialState() {
        return {clientSettings};
    }
});

module.exports = ClientSettingsStore;
