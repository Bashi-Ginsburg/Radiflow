import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const createBaseRequest = () => {

	const instance = axios.create({
		baseURL: baseUrl,
	});

	return instance;
};


export const handleResponse = res => {
	if ([200, 201].includes(res.status)) {
		return {
			Status: 200,
			Payload: res.data
		};
	} else {
		return {
			Status: res.stauts,
			ErrorMsg: res.data
		};
	}
};

