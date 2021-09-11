import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import {
  HashRouter as Router,
} from 'react-router-dom';
import Group from '../../components/Groups/Group';
import store from '../../Redux/configureStore';

describe('Check if all components are rendered', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Router><Group /></Router></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
