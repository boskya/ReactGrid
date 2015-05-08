var React = require('react');
require('react/addons');

var Row = React.createClass({
    getInitialState(){
      return {
        isEditing : false
      };
    },
    startEdit(evt) {
        evt.preventDefault();
        this.setState({isEditing: true});
    },
    stopEdit(evt){
      evt.preventDefault();
      this.setState({isEditing: false});
    },
    render() {
        var schema = this.props.schema;
        var task = this.props.task;
        var classes = React.addons.classSet({
            'editing': this.state.isEditing
        });
        return (
            <div className={"row " + classes}>
              <div className="col edit">
                <div className="preEdit">
                  <a href="#" onClick={this.startEdit}>
                    <span className="fa fa-pencil" ></span>
                  </a>
                </div>
                <div className="postEdit">
                  <a href="#" onClick={this.stopEdit}> Cancel </a>
                </div>
              </div>
            {
              schema.map(function(taskField){
                return (
                  <div className="col">
                    <span className="view">
                      {task[taskField.Name]}
                    </span>
                    <div className="editor">
                      EDIT ME!!
                    </div>
                  </div>
                );
              })
            }
            </div>
        );
    }
});


module.exports = Row;
