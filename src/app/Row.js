var React = require('react');
var Editor = require('./Editor')

var Row = React.createClass({
    getInitialState() {
        return {
            editing: false,
            task: this.props.task
        };
    },
    expandEdit() {
        if (!this.state.editing) {
            this.setState({ editing: true });
        }
    },
    collapseEdit() {
        if (this.state.editing) {
            this.setState({ editing: false });
        }
    },
    edit(field, val) {
        this.state.task[field] = val;
    },
    render() {
        var schema = this.props.schema;
        var task = this.state.task;
        var editing = this.state.editing;

        return (
            <div className="row" onClick={this.expandEdit}>
            {
               editing ? (<Editor task={task} schema={schema} editFN={this.edit} doneCB={this.collapseEdit} />) : schema.map(function(taskField){
                return (
                  <div className="col">{task[taskField.Name]}</div>
                );
              })
              
            }
            </div>
        );
        
    }
});


module.exports = Row;
