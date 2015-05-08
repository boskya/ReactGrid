var createRandomTask = require('./createRandomTask');

function createRandomSchedule(numTasks) {
    var tasks = [];
    for (var i = 0; i < numTasks; i++){
        tasks.push(createRandomTask());
    }
    return tasks;
}

module.exports = createRandomSchedule;

