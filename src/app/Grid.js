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
            <table id="grid" className="gridContainer">
                <tr className="headerRow">
                {
                  displaySchema.map(function(taskField){
                    return (
                      <th>{taskField.DisplayName}</th>
                    );
                  })
                }
                </tr>
                {
                    this.state.tasks.tasks.map(function (task) {
                        return <Row schema={displaySchema} task={task}/>;
                    })
                }
            </table>
        );
    }
});

module.exports = Grid;
