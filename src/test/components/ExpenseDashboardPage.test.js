import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';
// import toJSON from '../../components/Header';
import toJson from 'enzyme-to-json';

test('should render Notfoundpage correctly', () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<ExpenseDashboardPage />);
  // expect(wrapper.find('h2').text()).toBe('Expensify Bar');
  expect(toJson(wrapper)).toMatchSnapshot();
});