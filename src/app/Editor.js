var React = require('react');

var Editor = React.createClass({
    render() {
        var task = this.props.task;
        var schema = this.props.schema;
        return (
            <div className="full-width task-editor">
                <div>Name: <input type="text" value={task.Title} ></input></div>
                <div>Planned Start: <input type="date" value={task.PlannedStart} /></div>
                <div>Planned Finish: <input type="date" value={task.PlannedFinish}/></div>
                <button type="button" onClick={this.props.doneCB}>Done</button>
            </div>
        );
    }
});

module.exports = Editor;