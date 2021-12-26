import {CommonWrapper} from "enzyme";

export const simulate = (wrapper: CommonWrapper, customEvent: string, ...args: any[]) => {
	const eventHandler = wrapper.prop(customEvent) as (arg?: any[]) => void;
	return eventHandler.call<null, any[], any>(null, ...args);
};