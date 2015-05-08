var React = require('react');
var Editor = require('./Editor')

var Row = React.createClass({
    getInitialState() {
        return {
            editing: false
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
    render() {
        var schema = this.props.schema;
        var task = this.props.task;
        var editing = this.state.editing;

        return (
            <div className="row" onClick={this.expandEdit}>
            {
               editing ? (<Editor task={task} schema={schema} doneCB={this.collapseEdit} />) : schema.map(function(taskField){
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
