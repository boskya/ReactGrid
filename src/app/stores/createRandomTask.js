var moment = require('moment');
var faker = require('faker');

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var taskTypes = [
    'Fixed Units',
    'Fixed Units Effort Driven',
    'Fixed Duration',
    'Fixed Duration Effort Driven',
    'Fixed Work Effort Driven'
];
function getRandomTaskType() {
    return taskTypes[getRandomInt(0, 5)];
}

var taskStatuses = [
    'In Progress',
    'Not Started',
    'Done',
    'Blocked'
];
function getRandomTaskStatus() {
    return taskStatuses[getRandomInt(0, 4)];
}

var taskPriorities = [
    'Low',
    'Medium',
    'High',
    'Do it Die!'
];
function getRandomTaskPriority() {
    return taskPriorities[getRandomInt(0, 4)];
}

function getRandomAssignments(numAssignees) {
    numAssignees = Math.max(1, numAssignees);

    var assigneeNames = '';
    for (var i = 0; i < numAssignees; i++){
        if (i != 0) {
            assigneeNames += ', '
        }
        assigneeNames += faker.name.findName();
    }

    return assigneeNames;
}

function getRandomOutlineNumber(min, max) {
    return getRandomInt(min, max) + ((Math.floor(Math.random() * 10) / 10) % 1);
}

function getRandomYesNo(){
    return !!getRandomInt(0, 2) ? 'Yes' : 'No';
}

var taskNumber = 1;
function createRandomTask() {
    var startDate = new Date(2015, getRandomInt(0, 12), getRandomInt(1, 31));
    var finishDate = moment(startDate).add(getRandomInt(2, 12), 'w');
    var actualStart = moment(finishDate).add(getRandomInt(0, 7), 'd');
    var actualFinish = moment(finishDate).add(getRandomInt(0, 7), 'd');
    var duration = moment.duration(finishDate - startDate);
    return {
        ActualStart: actualStart,
        ActualFinish: actualFinish,
        ActualWorkMinutes: getRandomInt(),
        Description: faker.lorem.sentence(),
        Assignments: getRandomAssignments(getRandomInt(1, 4)),
        DurationMinutes: duration.humanize(),
        IsBillable: getRandomYesNo(),
        IsDeliverable: getRandomYesNo(),
        IsMilestone: getRandomYesNo(),
        Number: taskNumber++,
        OnHold: getRandomYesNo(),
        OutlineNumber: getRandomOutlineNumber(10, 100),
        PercentComplete: getRandomInt(0, 101) + '%',
        PlannedStart: startDate,
        PlannedFinish: finishDate,
        PlannedWorkMinutes: duration.add(getRandomInt(0, 60000), 'm').humanize(),
        Priority: getRandomTaskPriority(),
        Status: getRandomTaskStatus(),
        TaskType: getRandomTaskType(),
        Title: faker.hacker.ingverb() + ' ' + faker.hacker.adjective() + ' ' + faker.hacker.noun()
    }
}

module.exports = createRandomTask;
