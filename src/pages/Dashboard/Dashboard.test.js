import Enzyme, { shallow } from 'enzyme';
import { Dashboard } from './Dashboard.page';

describe('Testing Dashboard page', () => {
  
  let wrapper = shallow(<Dashboard/>);
  
  test('Renders without error', () => {
    const container = wrapper.find('#dashboard-container');
    expect(container.length).toBe(1);
  });

});