
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon'
import $ from 'jquery';
import Relate from '../product-card/Related-product';
import Outfit from './Outfit';
import css from './outfit.module.css';
jest.mock('./Outfit');

Enzyme.configure({ adapter: new Adapter() });


describe('Outfit Component', () => {

  it('Renders Modal component', () => {
    const wrapper = shallow( <Outfit/>);;
    expect(wrapper).toMatchSnapshot()
  });

  it('Modal should contain a table', () => {
    const wrapper = shallow( <Outfit/>);
    expect(wrapper.find('button')).toBeTruthy();
  });

  it('Render the Header', () => {
    const wrapper = mount( <Outfit />);
    const btn = wrapper.find('h4').text()
    expect(btn).toEqual('Add to Outfit')
  });

  it('Render button', () => {
    const wrapper = mount( <Outfit />);
    const btn = wrapper.find('i .fa-times')
    expect(btn).toBeTruthy()
  });

  // it('Test click event', () => {
  //   const mockCallBack = jest.fn();
  //   const button = mount((
  //     <Outfit>
  //       <div onClick={mockCallBack} id={'addOutfit'}/>
  //     </Outfit>
  //   ));
  //   button.find('#addOutfit').simulate('click');
  //   expect(mockCallBack.mock.calls.length).toBe(1);


  // });


  it('Test click event', () => {
    Outfit.prototype.onClick = jest.fn();
    // const mockCallBack = jest.fn();
    let button = shallow( <Outfit />);

    button.find('#addOutfit').simulate('click');
    expect(button.find('#addOutfit').length).toEqual(1);
    expect(Outfit.prototype.onClick ).toHaveBeenCalled();



  });


});
