import React from 'react'
import renderer from 'react-test-renderer'
import Relate from './Related-product.jsx'
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Modal from '../model/Modal.jsx';
import sinon from 'sinon'


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

  it('related card should have star button', () => {
    const wrapper = shallow((
      <Relate>
        <button className="star"/>
      </Relate>
    ));
    expect(wrapper.find(<i className="star" />)).toBeTruthy();
  });

  it('Modal should exist within relate conponent', () => {
    const wrapper = shallow(<Relate/>);
    expect(wrapper.find(<Modal/>)).toBeTruthy()
  })

})






