import React, { useState, useEffect } from 'react';
import { getTasks, addTask } from '../../api/Tasks';
import TaskItem from '../TaskItem/TaskItem'

import './TasksList.scss';

export const TasksList = () => {

	const [tasks, setTasks] = useState([]);
    const [addTaskFormOpened, setAddTaskFormOpened] = useState(false);
    const [newTaskContent, setNewTaskContent] = useState('');

    const fetchTasksData = async () => {
        let tasksData = await getTasks();
        setTasks(tasksData);
    };

    useEffect(() => {
		fetchTasksData();
	}, []);

    const toggleAddTaskFormOpened = () => {
        setAddTaskFormOpened(!addTaskFormOpened);
    }

    const saveAddTask = async () => {
        await addTask(newTaskContent);
        await fetchTasksData();
        setNewTaskContent('');
        toggleAddTaskFormOpened();
    }

    const cancelAddTask = async () => {
        setNewTaskContent('');
        toggleAddTaskFormOpened();
    }

	return (
		<div className='tasks-list'>
            <h2>ToDo list</h2>
            <button onClick={toggleAddTaskFormOpened}>Add task</button>
            {addTaskFormOpened && (<div className='add-task-wrapper'>
                <input type={'text'} value={newTaskContent} onChange={(e) => setNewTaskContent(e.target.value)}></input>
                <button type={'button'} onClick={saveAddTask}>OK</button>
                <button type={'button'} onClick={cancelAddTask}>Cancel</button>
                </div>)}
			{tasks.map((task, index) => {
                return (<TaskItem  key ={`task-item-${index}`} task={task} fetchTasksData={fetchTasksData} />)
            })}
		</div>
	);
};

export default TasksList;
