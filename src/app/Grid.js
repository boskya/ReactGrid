/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var TasksStore = require('./stores/TaskStore');
var ClientSettingsStore = require('./stores/ClientSettingsStore');
var Row = require('./Row.js');
var _ = require('lodash');


var Grid = React.createClass({
    mixins: [Reflux.connect(TasksStore), Reflux.connect(ClientSettingsStore)],
    isElementInViewport(el){
      var rect = el.getBoundingClientRect();
      return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    },
    getInitialState(){
      return {
        startRow: 0,
        endRow:100
      }
    },
    render() {
        console.log('start rendering');
        var tasks = this.state.tasks.tasks.slice( this.state.startRow, this.state.endRow);
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
                        return <Row schema={displaySchema} task={task} index={index} endingRow={this.state.endRow}/>;
                    })
                }
            </ul>
          </div>
        );
    }
});

module.exports = Grid;
