import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import {
  HashRouter as Router,
} from 'react-router-dom';
import Header from '../../components/Header';
import store from '../../Redux/configureStore';

describe('Check if all components are rendered', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Router><Header /></Router></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
