import axios from "axios";
import {TravelFeeResponse} from "../dataModals/TravelFeeResponse";

const getTravelFeesByDate = (month: string) => {
	return axios.get<{ month: Date }, TravelFeeResponse>("http://localhost:3001/travelFees", {params: {month}})
		.then(response => response)
		.catch(error => error);
}

export const TravelFeeService = {
	getTravelFeesByDate,
}
