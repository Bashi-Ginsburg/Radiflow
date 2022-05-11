import { createBaseRequest } from './BaseRequest';

export const getTasks = async () => {
	try {
		const request = createBaseRequest();
		const response = await request.get(`tasks`);
		return response.data;
	} catch (error) {
		throw new Error(`Unable to get tasks`);
	}
};

export const addTask = async (taskContent) => {
	try {
		const request = createBaseRequest();
        const data = {
            Content: taskContent
        }
		const response = await request.post(`tasks`, data);
		return response.data;
	} catch (error) {
		throw new Error(`Unable to get tasks`);
	}
};


export const deleteTask = async (taskId) => {
	try {
		const request = createBaseRequest();
		const response = await request.delete(`tasks/${taskId}`);
		return response.data;
	} catch (error) {
		throw new Error(`Unable to get tasks`);
	}
};