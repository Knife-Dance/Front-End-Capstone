// import 'jsdom-global/register';
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon'
import Modal from './Modal';
import Relate from '../product-card/Related-product';

Enzyme.configure({ adapter: new Adapter() });

let productDataExample = {
  "id": 17067,
  "campus": "hr-rfp",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-02-23T04:22:44.728Z",
  "updated_at": "2021-02-23T04:22:44.728Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
}


const cardDataExample = {
  "id": 17068,
  "campus": "hr-rfp",
  "name": "Bright Future Sunglasses",
  "slogan": "You've got to wear shades",
  "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
  "category": "Accessories",
  "default_price": "69.00",
  "created_at": "2021-02-23T04:22:44.728Z",
  "updated_at": "2021-02-23T04:22:44.728Z",
  "features": [
      {
          "feature": "Lenses",
          "value": "Ultrasheen"
      },
      {
          "feature": "UV Protection",
          "value": null
      },
      {
          "feature": "Frames",
          "value": "LightCompose"
      }
  ]
}

describe('Modal', () => {

  it('Renders Modal component', () => {
    const wrapper = shallow( <Modal/>);;
    expect(wrapper).toMatchSnapshot()
  });

  it('Modal should contain a table', () => {
    const wrapper = shallow( <Modal/>);
    expect(wrapper.find('table')).toBeTruthy();
  });

  it('Render button', () => {
    const wrapper = mount( <Modal setShowModal={true} productData={productDataExample} cardData ={cardDataExample}/>);
    const btn = wrapper.find('h3').text()
    expect(btn).toEqual('Comparing')

    //Ask the text()
    // const btn = wrapper.find('.closeModalBtn').text()
    // expect(btn).toBeTruthy().toEqual('X')
  });

});


