import { shallow } from 'enzyme';
import React from 'react';
import Preloader from './Preloader';

describe('Preloader Test', () => {
  it('should render with props', () => {
    const component = shallow(<Preloader isLoading={true} />);
    expect(component).toMatchSnapshot();
  });

  it('should render without props', () => {
    const component = shallow(<Preloader />);
    expect(component).toMatchSnapshot();
  });
});
