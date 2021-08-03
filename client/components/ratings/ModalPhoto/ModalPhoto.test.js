import ModalPhoto from './ModalPhoto.jsx';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });
let clickedPhoto = 'https://images.unsplash.com/photo-1627844718626-4c6b963baac0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
let modal = true;
describe('ModalPhoto', () => {
  it('should render ModalPhoto component', () => {
    const wrapper = shallow(<ModalPhoto
        photo={clickedPhoto}
        showModal={modal}
      />);
  });
});