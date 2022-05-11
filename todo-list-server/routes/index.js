const express = require('express')
const router = express.Router()

const { catchErrors } = require('../handlers/errorHandlers')

const { getTasks, addTask, deleteTask } = require('./tasks')

// Tasks routes
router.get('/tasks', catchErrors(getTasks));
router.post('/tasks', catchErrors(addTask));
router.delete('/tasks/:id', catchErrors(deleteTask));


module.exports = router;