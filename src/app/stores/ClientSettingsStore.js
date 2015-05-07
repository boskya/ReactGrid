var Reflux = require('reflux');
var React = require('react');


var clientSettings = {
  taskGridSettings : {
    {
        "Name": "Number",
        "Order": 1
    },
    {
        "Name": "Title",
        "Order": 2
    },
    {
        "Name": "ActualFinish",
        "Order": 3
    },
    {
        "Name": "ActualStart",
        "Order": 4
    },
    {
        "Name": "Assignments",
        "Order": 5
    },
    {
        "Name": "DurationMinutes",
        "Order": 6
    },
    {
        "Name": "OnHold",
        "Order": 7
    },
    {
        "Name": "OutlineNumber",
        "Order": 8
    },
    {
        "Name": "PercentComplete",
        "Order": 9
    },
    {
        "Name": "PlannedFinish",
        "Order": 10
    },
    {
        "Name": "PlannedStart",
        "Order": 11
    },
    {
        "Name": "Priority",
        "Order": 12
    },
    {
        "Name": "Status",
        "Order": 13
    },
    {
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
