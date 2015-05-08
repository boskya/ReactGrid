var React = require('react');
var Editor = require('./Editor')

var Row = React.createClass({
    getInitialState() {
        return {
            editing: false
        };
    },
    toggleEdit() {
        this.setState({ editing: !this.state.editing });
    },
    render() {
        var schema = this.props.schema;
        var task = this.props.task;
        var editing = this.state.editing;

        return (
            <div className="row">
            {
               editing ? (<Editor task={task} schema={schema}/>) : schema.map(function(taskField){
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
