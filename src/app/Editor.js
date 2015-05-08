var React = require('react');

var Editor = React.createClass({
    render() {
        var task = this.props.task;
        var schema = this.props.schema;
        return (
            <div className="full-width task-editor">
                <input type="text" value={task.Title} ></input>
                Planned Start: <input type="date" value={task.PlannedStart} /> Planned Finish: <input type="date" value={task.PlannedFinish}/>
                <button type="button" onClick={this.props.doneCB}>Done</button>
            </div>
        );
    }
});

module.exports = Editor;