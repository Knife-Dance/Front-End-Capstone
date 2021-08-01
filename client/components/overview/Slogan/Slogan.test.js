import Slogan from './Slogan.jsx';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

let example = {"slogan": "Blend in to your crowd",
"description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",}

describe('Slogan', () => {
  it('should render Slogan component', () => {
    const wrapper = shallow(<Slogan product={example}/>);
  });
  it('should render slogan dynamically', () => {
    const wrapper = shallow(<Slogan product={example}/>);
    expect(wrapper.find('h5').text()).toBe("Blend in to your crowd");
  });
  it('should render description dynamically', () => {
    const wrapper = shallow(<Slogan product={example}/>);
    expect(wrapper.find('p').text()).toBe("The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.");
  });
});