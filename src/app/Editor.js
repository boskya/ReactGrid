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
                <span className="section" >
                    <div>section 1</div>
                    <div>
                        <span className="field name">Name:</span>
                        <span className="field value"><input type="text" defaultValue={task.Title} onChange={this.edit("Title")}/></span>
                    </div>
                    <div>
                        <span className="field name">Description:</span>
                        <span className="field value"><textarea onChange={this.edit("Description")}>{task.Description}</textarea></span>
                    </div>
                </span>
                <span className="section" >
                    <div> section 2</div>
                    <div>
                        <span className="field name">Planned Start:</span>
                        <span className="field value"><input type="date" defaultValue={moment(task.PlannedStart).format('YYYY-MM-DD')} onChange={this.edit("PlannedStart")}/></span>
                    </div>
                    <div>
                        <span className="field name">Planned Finish:</span>
                        <span className="field value"><input type="date" defaultValue={moment(task.PlannedFinish).format('YYYY-MM-DD')} onChange={this.edit("PlannedFinish")}/></span>
                    </div>
                    <div>
                        <span className="field name">Duration:</span>
                        <span className="field value"><input type="text" defaultValue={task.Duration} onChange={this.edit("Duration")}/></span>
                    </div>
                    <div>
                        <span className="field name">Type:</span>
                        <span className="field value">
                            <select defaultValue={task.Type} onChange={this.edit("Type")}>
                                <option value="0">Fixed Duration</option>
                                <option value="1">Fixed Duration Effort Driven</option>
                                <option value="2">Fixed Units</option>
                                <option value="3">Fixed Units Effort Driven</option>
                                <option value="4">Fixed Work</option>
                            </select>
                        </span>
                    </div>
                </span>
                <span className="section" ><div> section 3</div>
                <div>
                    <span className="field name">Actual Start:</span>
                    <span className="field value"><input type="date" defaultValue={moment(task.ActualStart).format('YYYY-MM-DD')} disabled="disabled" /></span>
                </div>
                <div>
                    <span className="field name">Actual Finish:</span>
                    <span className="field value"><input type="date" defaultValue={moment(task.ActualFinish).format('YYYY-MM-DD')} disabled="disabled" /></span>
                </div>
                <div>
                    <span className="field name">% Complete:</span>
                    <span className="field value"><input type="text" defaultValue={task.PercentComplete} onChange={this.edit("PercentComplete")}/></span>
                </div>
                <div>
                    <span className="field name">Priority:</span>
                    <span className="field value">
                        <select defaultValue={task.Priority} onChange={this.edit("Priority")}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Do it Die!">Do it Die!</option>
                        </select>
                    </span>
                </div>
                </span>
            </div>
        );
    }
});

module.exports = Editor;
