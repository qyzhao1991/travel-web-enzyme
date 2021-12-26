import React from 'react';
import {shallow} from "enzyme";
import App from "./App";
import TravelFees from "./views/TravelFees";
import {simulate} from "./__test-Utils__";

describe("test enzyme", () => {
  it('should render success', () => {
     const wrapper = shallow(<App />);
     expect(wrapper).toMatchSnapshot();
  });
  
  it('should render travel fees component when click menu', () => {
    const wrapper = shallow(<App />);
    simulate(wrapper.find('Menu'), 'onClick', { key: 'travelFees' });
    
    expect(wrapper.find(TravelFees).exists()).toBeTruthy();
  });
})
