import StyleImage from './StyleImage.jsx';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

let example = {
  "photos": [
    {
      "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
      "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    }
  ]
}

describe('StyleImage', () => {
  it('should render StyleImage component', () => {
    const wrapper = shallow(<StyleImage style={example} />)
  })
  it('should render image dyanmically', () => {
    const wrapper = shallow(<StyleImage style={example}/>)
    expect(wrapper.find('img').prop('src')).toEqual("https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80")
  })
})