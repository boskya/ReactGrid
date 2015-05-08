var React = require('react');
var Editor = require('./Editor')
require('react/addons');

var Row = React.createClass({
    getInitialState(){
      return {
        task: this.props.task,
        isInlineEditing : false,
        editing: false
      };
    },
    startInlineEdit(evt) {
        evt.preventDefault();
        this.setState({isInlineEditing: true, editing: false});
    },
    stopInlineEdit(evt){
      evt.preventDefault();
      this.setState({isInlineEditing: false, editing: false});
    },
    expandEdit(evt) {
        if (!this.state.editing) {
          evt.stopPropagation();
          this.setState({ isInlineEditing: false, editing: true });
        }
    },
    collapseEdit(evt) {
        if (this.state.editing) {
            evt.stopPropagation();
            this.setState({ isInlineEditing: false, editing: false });
        }
    },
    checkEnter(evt) {
        if(evt.charCode == 13) {
            this.stopInlineEdit(evt);
            return false;
        }
        return true;
    },
    editField(field, value) {
        this.state.task[field] = value;
    },
    dataChange(field) {
        var e = this.editField;
        return function (evt) {
            e(field, evt.target.value);
        };
    },
    render() {
        var schema = this.props.schema;
        var task = this.state.task;
        var classes = React.addons.classSet({
            'editing': this.state.isInlineEditing
        });
        var editing = this.state.editing;
        var inlineEdit = this.state.isInlineEditing;
        var startInlineEditHandler = this.startInlineEdit;
        var checkEnter = this.checkEnter;
        var dataChange = this.dataChange;
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
              editing ? (<Editor task={task} schema={schema} editFN={this.editField} doneCB={this.collapseEdit} />) : schema.map(function(taskField){
                 return inlineEdit ? (
                  <div className="col">
                    <div className="view">
                      <input type="text" defaultValue={task[taskField.Name]} onChange={dataChange(taskField.Name)} onKeyPress={checkEnter}></input>
                    </div>
                  </div>
                ) : (
                  <div className="col" onClick={startInlineEditHandler}>
                    <span className="view">
                      {task[taskField.Name]}
                    </span>
                  </div>
                  );
              })
            }
            </div>
        );
    }
});


module.exports = Row;
