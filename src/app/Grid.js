/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var TasksStore = require('./stores/TaskStore');
var ClientSettingsStore = require('./stores/ClientSettingsStore');
var Row = require('./Row.js');
var _ = require('lodash');


var Grid = React.createClass({
    mixins: [Reflux.connect(TasksStore), Reflux.connect(ClientSettingsStore)],
    render() {
        var tasks = this.state.tasks.tasks;
        var tasksSchema = this.state.tasks.schema;
        var taskGridSettings = this.state.clientSettings.taskGridSettings;
        var taskGridSettingsSorted = _.sortBy(taskGridSettings, "Order");
        var displaySchema = taskGridSettingsSorted.map(function(taskFieldSetting){
            return _.find(tasksSchema, { 'Name': taskFieldSetting.Name })
        });
        return (
            <div id="grid" className="gridContainer">
                <div className="rowHeader">
                {
                  displaySchema.map(function(taskField){
                    return (
                      <div className="col">{taskField.DisplayName}</div>
                    );
                  })
                }
                </div>
                {
                    this.state.tasks.tasks.map(function (task) {
                        return <Row schema={displaySchema} task={task}/>;
                    })
                }
            </div>
        );
    }
});

module.exports = Grid;
