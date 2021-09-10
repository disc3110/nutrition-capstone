import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Groups from '../../components/Groups/Groups';
import store from '../../Redux/configureStore';

describe('Check if all components are rendered', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Groups /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
