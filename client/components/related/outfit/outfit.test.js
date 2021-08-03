
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
import TestProvider from '../../shared/context/TestProvider.jsx'
import {addOutfit} from '../../shared/context/TestProvider.jsx'
import {removeOutfit} from '../../shared/context/TestProvider.jsx'
// console.log(addOutfit)

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

  it('Test click event for add button', () => {
   //create an event handler
    // const mockCallBack = jest.fn();
     //render the component

    const button = mount((
      <TestProvider>
        <Outfit />
      </TestProvider>


    ));
        // console.log(button.debug())

    //find the element div
    const btn = button.find('#addOutfit');

    //simulate theclick event on the element
    btn.simulate('click')

      //test to see if simulation goes thru
      expect(addOutfit.mock.calls.length).toBe(1);
  });

  it('Test click event for closing button ', () => {
     const button = mount((
       <TestProvider>
         <Outfit />
       </TestProvider>
     ));

     const btn = button.find('#outfitCloseBtn');

     //simulate theclick event on the element
     btn.simulate('click')

       //test to see if simulation goes thru
       expect(removeOutfit.mock.calls.length).toBe(1);
   });






});
