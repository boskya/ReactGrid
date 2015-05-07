var React = require('react');

var Row = React.createClass({
    render() {
        var schema = this.props.schema;
        var task = this.props.task;
        return (
            <tr className="row">
            {
              schema.map(function(taskField){
                return (
                  <td className="col">{task[taskField.Name]}</td>
                );
              })
            }
            </tr>
        );
    }
});


module.exports = Row;