var React = require('react');
var Editor = require('./Editor')
require('react/addons');

var Row = React.createClass({
    getInitialState(){
      return {
        isEditing : false,
            editing: false,
            task: this.props.task
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
        var classes = React.addons.classSet({
            'editing': this.state.isEditing
        });
        var editing = this.state.editing;
        return (
            <div className={"row " + classes} onClick={this.expandEdit}>
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
              editing ? (<Editor task={task} schema={schema} editFN={this.edit} doneCB={this.collapseEdit} />) : schema.map(function(taskField){
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
