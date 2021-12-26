import '../setupTests';
import { TravelFeeService } from '../services/travelFees';
import React from 'react';
import { shallow } from 'enzyme';
import TravelFees from './TravelFees';
import { simulate, wait } from '../__test-Utils__';
import { Button } from 'antd';

jest.mock('../services/travelFees');

describe('TravelFees', () => {
	it('should return travel fees data when presenter call service', async () => {
		const mockService = jest.spyOn(TravelFeeService, 'getTravelFeesByDate');
		mockService.mockResolvedValue({ data: [{ id: '1' }, { id: '2' }] });
		
		const setSelectedMonth = jest.fn();
		const setResponseData = jest.fn();
		jest.spyOn(React, 'useState').mockImplementationOnce(() => ['2021/10', setSelectedMonth]);
		jest.spyOn(React, 'useState').mockImplementationOnce(() => [undefined, setResponseData]);
		
		const wrapper = shallow(<TravelFees/>);
		simulate(wrapper.find(Button), 'onClick', {});
		
		expect(mockService).toBeCalledWith('2021/10');
		await wait(0);
		expect(setResponseData).toBeCalledWith([{ id: '1' }, { id: '2' }]);
	});
})