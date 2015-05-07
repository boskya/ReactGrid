var React = require('react');

var Row = React.createClass({
    render() {
        var schema = this.props.schema;
        var task = this.props.task;
        return (
            <div className="row">
            {
              schema.map(function(taskField){
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
