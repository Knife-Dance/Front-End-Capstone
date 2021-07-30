import React from 'react'
import renderer from 'react-test-renderer'
import Relate from './Related-product.jsx'
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Relate', () => {
  it('should render the related product card component', () => {
    const wrapper = shallow((
      <Relate>
        <div className="productItem"/>
      </Relate>
    ));
    expect(wrapper.find(<div className="productItem" />)).toBeTruthy();
  });
})





// describe("ReviewAverage", () => {
//   it("should render review average component", () => {
//     const wrapper = shallow(<ReviewAverage/>);
//   });
//   it("should have five star children", () => {
//     const wrapper = shallow(<ReviewAverage average={5}/>);
//     expect(wrapper.find('div').children()).toHaveLength(5);
//   });
//   it("should accept decimals and render 5 stars", () => {
//     const wrapper = shallow(<ReviewAverage average={1.02384}/>);
//     expect(wrapper.find('div').children()).toHaveLength(5)
//   })
// });

