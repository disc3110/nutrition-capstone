import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Sports from '../../components/SportsByCategory';
import store from '../../redux/configureStore';

describe('Check if all components are rendered', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Sports /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
