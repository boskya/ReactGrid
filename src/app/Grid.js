/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var TasksStore = require('./stores/TaskStore');
var ClientSettingsStore = require('./stores/ClientSettingsStore');
var Row = require('./Row.js');

var Grid = React.createClass({
    mixins: [Reflux.connect(TasksStore)],
    render() {
        var tasks = this.state.tasks.tasks;
        var tasksSchema = this.state.tasks.schema;
        return (
            <table id="grid" className="gridContainer">
                <tr className="headerRow">
                {
                  this.state.tasks.schema.map(function(taskField){
                    return (
                      <th>{taskField.DisplayName}</th>
                    );
                  })
                }
                </tr>
                {
                    this.state.tasks.tasks.map(function (task) {
                        return <Row schema={tasksSchema} task={task}/>;
                    })
                }
            </table>
        );
    }
});

module.exports = Grid;
