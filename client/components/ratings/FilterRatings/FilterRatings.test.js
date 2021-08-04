import FilterRatings from './FilterRatings.jsx';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });
let metaReviews = {
    "product_id": "17067",
    "ratings": {
        "1": "3",
        "2": "10",
        "3": "35",
        "4": "76",
        "5": "69"
    },
    "recommended": {
        "false": "65",
        "true": "128"
    },
    "characteristics": {
        "Fit": {
            "id": 57222,
            "value": "2.6629213483146067"
        },
        "Length": {
            "id": 57223,
            "value": "2.8372093023255814"
        },
        "Comfort": {
            "id": 57224,
            "value": "3.1034482758620690"
        },
        "Quality": {
            "id": 57225,
            "value": "3.1573033707865169"
        }
    }
};
describe('FilterRatings', () => {
  it('should render FilterRatings component', () => {
    const wrapper = shallow(<FilterRatings meta={metaReviews}/>);
  });
});