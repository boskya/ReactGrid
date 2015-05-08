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
          <div id="grid">
            <div className="addRowHeader">
              <a href="#"><span className="add-icon"></span>Add</a>
            </div>
            <div className="gridContainer">
                <div className="rowHeader">
                  <div className="col edit"></div>
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
          </div>
        );
    }
});

module.exports = Grid;
