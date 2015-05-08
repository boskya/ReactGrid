var React = require('react');
var moment = require('moment');
var Editor = React.createClass({
    edit(field) {
        var e = this.props.editFN;
        return function (event) {
            e(field, event.target.value);
        };
    },
    getInitialState() {
        return {
            task: this.props.task
        };
    },
    render() {
        var task = this.state.task;
        var schema = this.props.schema;
        return (
            <div className="full-width task-editor">
                <div>Name: <input type="text" defaultValue={task.Title} onChange={this.edit("Title")} ></input></div>
                <div>Planned Start: <input type="date" defaultValue={moment(task.PlannedStart).format('YYYY-MM-DD')} onChange={this.edit('PlannedStart')}/></div>
                <div>Planned Finish: <input type="date" defaultValue={moment(task.PlannedFinish).format('YYYY-MM-DD')} onChange={this.edit('PlannedFinish')}/></div>
                <button type="button" onClick={this.props.doneCB}>Done</button>
            </div>
        );
    }
});

module.exports = Editor;