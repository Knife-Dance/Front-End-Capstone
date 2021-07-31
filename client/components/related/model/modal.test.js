import 'jsdom-global/register';
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon'
import Modal from './Modal';
import Relate from '../product-card/Related-product';

Enzyme.configure({ adapter: new Adapter() });
describe('Modal', () => {
  it('should render the modal', () => {
    const wrapper = shallow(<Modal/>);
  });
  it("should have table within modal", () => {
    const wrapper = mount(<Relate/>);
    const modal = mount(<Modal/>);
    const table = modal.find('table');
    const node = table.find(Node)
    expect(table).toHaveLength(0);
  });
  
});