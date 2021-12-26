import axios from 'axios';
import { TravelFeeResponse } from '../dataModals/TravelFeeResponse';

const baseUrl = 'http://localhost:3001'

const getTravelFeesByDate = (month: string) => {
	return axios.get<{ month: Date }, TravelFeeResponse>(`${baseUrl}/travel-fees`, { params: { month } })
		.then(response => response)
		.catch(error => error);
}

export const TravelFeeService = {
	getTravelFeesByDate,
}
