var Reflux = require('reflux');

var TasksStore = Reflux.createStore({

  //model data
  tasks: [],
  listenables: [],

  getInitalState: function() {
      this.tasks = [
        {
          "Title": "deskdocs",
        },
        {
          "Title": "some other deskdocs",
        },
      ]
      return this.tasks;
  }
});

module.exports = TasksStore
