var React = require('react');

var Editor = React.createClass({
    getInitialState() {
        return {editing: false};
    },
    expandEdit(evt) {
        this.props.expandEditFn(evt);
        this.state.editing = true;
    },
    collapseEdit(evt) {
        this.props.collapseEditFn(evt);
        this.state.editing = false;
    },
    render() {

        return this.state.editing
        ? (
            <div className="col edit">
                    <a href="#" onClick={this.collapseEdit}>
                        <span className="fa fa-caret-square-o-down" ></span>
                    </a>
            </div>
        )
        :(
            <div className="col edit">
                <a href="#" onClick={this.expandEdit}>
                    <span className="fa fa-caret-square-o-right" ></span>
                </a>
            </div>
        );
    }
});

module.exports = Editor;
