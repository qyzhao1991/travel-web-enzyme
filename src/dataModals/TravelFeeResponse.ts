export type TravelFeeResponse = {
	id: string;
	name: string;
	amount: number;
	appliedBy: User;
	month: string;
}[]

export type User = {
	id: string;
	name: string;
	apartment: string;
	employeeId: string;
}