import RatingStarts from './RatingsStars';
import React from 'react';
import { shallow } from 'enzyme';

describe('should render RatingsStarts', () => {
  it('RatingsStarts component with props', () => {
    const component = shallow(<RatingStarts rating={5} />);
    expect(component).toMatchSnapshot();
  });
  it('RatingsStarts component without props', () => {
    const component = shallow(<RatingStarts />);
    expect(component).toMatchSnapshot();
  });
});
