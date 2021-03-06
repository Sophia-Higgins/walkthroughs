import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('should render correctly in "debug" mode', () => {
    window.scrollTo = jest.fn();
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });
});
