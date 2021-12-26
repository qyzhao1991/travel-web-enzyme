import React from "react";
import {Button, DatePicker, Table} from "antd";
import {TravelFeeService} from "../services/travelFees";
import moment from "moment";
import {TravelFeeResponse, User} from "../dataModals/TravelFeeResponse";

function TravelFees() {
	const [selectedMonth, setSelectedMonth] = React.useState<string>();
	const [responseData, setResponseData] = React.useState<TravelFeeResponse>();
	
	function handleClick() {
		return selectedMonth ? TravelFeeService.getTravelFeesByDate(selectedMonth)
				.then(response => setResponseData(response.data))
				.catch(error => console.log('show error', error))
			: console.log('..no selectedMonth');
	}
	
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Amount',
			dataIndex: 'amount',
			key: 'amount',
		},
		{
			title: 'Month',
			dataIndex: 'month',
			key: 'month',
		},
		{
			title: 'AppliedBy',
			dataIndex: 'appliedBy',
			key: 'appliedBy',
			render: (appliedBy: User) => appliedBy.name
		},
	];
	
	return (
		<>
			<div>This is travel fees pages</div>
			<DatePicker picker={'month'}
									onChange={(date) => setSelectedMonth(`${moment(date).get('year')}/${moment(date).get('month') + 1}`)}/>
			<Button
				data-testid="buttonId"
				onClick={handleClick}>
				Confirm Selection
			</Button>
			{responseData && <Table dataSource={responseData} columns={columns} />}
		</>
	)
}

export default TravelFees;