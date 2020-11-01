import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

const getComponent = props => shallow(<Header {...props} />);

describe('should render component Header', () => {
  it('should render component Header', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });
});
