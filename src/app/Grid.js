/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var TasksStore = require('./stores/TaskStore');

var Grid = React.createClass({
    mixins: [Reflux.connect(TasksStore)],
    render() {
        return (
            <div className="gridContainer">
                <div className="rowHeader">
                    <div className="col">Column 1</div>
                    <div className="col">Column 2</div>
                    <div className="col">Column 3</div>
                    <div className="col">Column 3</div>
                </div>
                {
                    this.state.tasks.map(function (task) {
                        return (
                            <div className="row">
                                <div className="col">Column 1</div>
                                <div className="col">Column 2</div>
                                <div className="col">Column 3</div>
                                <div className="col">Column 3</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
});

module.exports = Grid;
