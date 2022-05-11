import React, { useState, useEffect } from 'react';
import { deleteTask } from '../../api/Tasks';

import './TaskItem.scss';

export const TaskItem = (props) => {

    const { task, fetchTasksData } = props;

    const onClickDeleteTask = async () => {
        await deleteTask(task.Id);
        await fetchTasksData();
    };

	return (
		<div className='task-item'>
                <span>{task.Content}</span>
                <button className='delete-task-btn' type={'button'} onClick={onClickDeleteTask}>Delete</button>
		</div>
	);
};

export default TaskItem;
