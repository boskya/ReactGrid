/** @jsx React.DOM */
var React = require('react');

var Grid = React.createClass({
	render: function() {
		return (
      <div className="gridContainer">
        <div className="rowHeader">
          <div className="col">Column 1</div>
          <div className="col">Column 2</div>
          <div className="col">Column 3</div>
          <div className="col">Column 3</div>
        </div>
        <div className="row">
          <div className="col">Column 1</div>
          <div className="col">Column 2</div>
          <div className="col">Column 3</div>
          <div className="col">Column 3</div>
        </div>
        <div className="row">
          <div className="col">Column 1</div>
          <div className="col">Column 2</div>
          <div className="col">Column 3</div>
          <div className="col">Column 3</div>
        </div>
        <div className="row">
          <div className="col">Column 1</div>
          <div className="col">Column 2</div>
          <div className="col">Column 3</div>
          <div className="col">Column 3</div>
        </div>
      </div>
		);
	}

});

module.exports = Grid;
