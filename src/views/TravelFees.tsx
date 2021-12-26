import React from 'react';
import { Alert, Button, DatePicker, Table } from 'antd';
import { TravelFeeService } from '../services/travelFees';
import moment from 'moment';
import { TravelFeeResponse, User } from '../dataModals/TravelFeeResponse';

function TravelFees() {
	const [selectedMonth, setSelectedMonth] = React.useState<string>();
	const [responseData, setResponseData] = React.useState<TravelFeeResponse>();
	const [showAlert, setShowAlert] = React.useState<boolean>(false);
	
	function handleClick() {
		if (moment(selectedMonth).isSameOrAfter(moment(Date.now()))) {
			return setShowAlert(true);
		}
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
			<DatePicker
				picker={'month'}
				onChange={(date) => setSelectedMonth(`${moment(date).get('year')}/${moment(date).get('month') + 1}`)}
			/>
			<Button
				data-testid="buttonId"
				onClick={handleClick}>
				Confirm Selection
			</Button>
			{<Table dataSource={responseData} columns={columns}/>}
			{showAlert && <Alert message={'can not select month later than today'}/>}
		</>
	)
}

export default TravelFees;