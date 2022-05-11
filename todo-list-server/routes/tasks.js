var uuid = require('uuid');
const { TodoList, MaxTasksNum } = require('../data/todoList');

const getTasks = async (request, response) => {
    response.send(TodoList.Tasks);
}

const addTask = async (request, response) => {
    if (TodoList.Tasks.length == MaxTasksNum) {
        throw new Error(`The maximum number of tasks is ${MaxTasksNum}`);
    }
    const requestBody = request.body;
    const newTask = {
        Id: uuid.v4(),
        Content: requestBody.Content
    }
    TodoList.Tasks.push(newTask);
    response.send(TodoList.Tasks);
}

const deleteTask = async (request, response) => {
    const requestParams = request.params;
    const taskIndex = TodoList.Tasks.findIndex(task => task.Id === requestParams.id);
    if (taskIndex === -1) {
        throw new Error(`This task: ${requestParams.id} not exists`);
    }
    TodoList.Tasks.splice(taskIndex, 1);
    response.send(TodoList.Tasks);
}

module.exports = {
    getTasks,
    addTask,
    deleteTask
}