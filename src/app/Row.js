var React = require('react');
var Editor = require('./Editor')
require('react/addons');

var Row = React.createClass({
    getInitialState(){
      return {
        isInlineEditing : false,
        editing: false
      };
    },
    startInlineEdit(evt) {
        evt.preventDefault();
        this.setState({isInlineEditing: true});
    },
    stopInlineEdit(evt){
      evt.preventDefault();
      this.setState({isInlineEditing: false});
    },
    expandEdit(evt) {
        if (!this.state.editing) {
          evt.stopPropagation();
          this.setState({ editing: true });
        }
    },
    collapseEdit(evt) {
        if (this.state.editing) {
            evt.stopPropagation();
            this.setState({ editing: false });
        }
    },
    render() {
        var schema = this.props.schema;
        var task = this.props.task;
        var classes = React.addons.classSet({
            'editing': this.state.isInlineEditing
        });
        var editing = this.state.editing;
        var startInlineEditHandler = this.startInlineEdit;
        return (
            <div className="row">
              <div className="col edit">
                <div className="preEdit">
                  <a href="#" onClick={this.expandEdit}>
                    <span className="fa fa-pencil" ></span>
                  </a>
                </div>
                <div className="postEdit">
                  <a href="#" onClick={this.stopInlineEdit}> Cancel </a>
                </div>
              </div>
            {
              editing ? (<Editor task={task} schema={schema} doneCB={this.collapseEdit} />) : schema.map(function(taskField){
                 return (
                  <div className={"col " + classes} onClick={startInlineEditHandler}>
                    <span className="view">
                      {task[taskField.Name]}
                    </span>
                    <div className="editor">
                      <input type="text" value="EDIT ME"></input>
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
