/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var TasksStore = require('./stores/TaskStore');

var Grid = React.createClass({
    mixins: [Reflux.connect(TasksStore)],
    render() {
        var tasks = this.state.tasks.tasks;
        var tasksSchema = this.state.tasks.schema;
        return (
            <table className="gridContainer">
                <tr className="headerRow">
                {
                  this.state.tasks.schema.map(function(taskField){
                    return (
                      <th>{taskField}</th>
                    );
                  })
                }
                </tr>
                {
                    this.state.tasks.tasks.map(function (task) {
                        return (
                            <tr className="row">
                            {
                              tasksSchema.map(function(taskField){
                                return (
                                  <td className="col">{task[taskField]}</td>
                                );
                              })
                            }
                            </tr>
                        );
                    })
                }
            </table>
        );
    }
});

module.exports = Grid;
