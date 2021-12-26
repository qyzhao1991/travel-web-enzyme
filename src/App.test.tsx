import React from 'react';
import {shallow} from "enzyme";
import App from "./App";

describe("test enzyme", () => {
  it('should render success', () => {
     const wrapper = shallow(<App />);
     expect(wrapper).toMatchSnapshot();
  });
})
