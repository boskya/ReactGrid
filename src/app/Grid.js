/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var TasksStore = require('./stores/TaskStore');
var ClientSettingsStore = require('./stores/ClientSettingsStore');
var Row = require('./Row.js');
var _ = require('lodash');

var loadChunkSize = 50;

var Grid = React.createClass({
    mixins: [Reflux.connect(TasksStore), Reflux.connect(ClientSettingsStore)],
    getInitialState(){
      return {
        startRow: 0,
        endRow:loadChunkSize
      }
    },

    handleScroll(e) {
        var elem = e.target;
        var scrollPosition = elem.scrollTop + elem.clientHeight;
        if (scrollPosition + 50 > elem.scrollHeight) {
            var nRowsAdded = Math.min(this.state.tasks.tasks.length, this.state.endRow + loadChunkSize) - this.state.endRow;
            this.setState({endRow: this.state.endRow + nRowsAdded});
        }
    },

    componentDidMount(){
        var grid = React.findDOMNode(this);
        var gridContainer = grid.querySelector('.gridContainer');

        gridContainer.onscroll = this.handleScroll;
    },

    render(){
        var tasks = _.slice(this.state.tasks.tasks, 0, this.state.endRow);
        var tasksSchema = this.state.tasks.schema;
        var taskGridSettings = this.state.clientSettings.taskGridSettings;
        var taskGridSettingsSorted = _.sortBy(taskGridSettings, "Order");

        var displaySchema = taskGridSettingsSorted.map(function(taskFieldSetting){
            return _.find(tasksSchema, { 'Name': taskFieldSetting.Name })
        });

        return (
          <div id="grid">
            <ul className="gridContainer">
                <li className="rowHeader">
                  <div className="col edit"></div>
                {
                  displaySchema.map(function(taskField){
                    return (
                      <div className="col">{taskField.DisplayName}</div>
                    );
                  })
                }
                </li>
                {
                    tasks.map(function (task, index) {
                        return <Row schema={displaySchema} task={task} index={index} />;
                    })
                }
            </ul>
          </div>
        );
    }
});

module.exports = Grid;
