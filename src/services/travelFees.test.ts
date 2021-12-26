import { TravelFeeService } from './travelFees'

jest.mock('./travelFees');

// todo need to find how to fake this.
describe('should return travel fees data when query by 2021/10', () => {
	const data = TravelFeeService.getTravelFeesByDate('2021/10');
})