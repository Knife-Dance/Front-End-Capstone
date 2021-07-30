import ReviewAverage from './ReviewAverage.jsx';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
Enzyme.configure({ adapter: new Adapter() });


describe("ReviewAverage", () => {
  it("should render review average component", () => {
    const wrapper = shallow(<ReviewAverage/>);
  });
  it("should have five star children", () => {
    const wrapper = shallow(<ReviewAverage average={5}/>);
    expect(wrapper.find('div').children()).toHaveLength(5);
  });
  it("should accept decimals and render 5 stars even when average passed in is smaller than 5", () => {
    const wrapper = shallow(<ReviewAverage average={1.02384}/>);
    expect(wrapper.find('div').children()).toHaveLength(5)
  })
});

