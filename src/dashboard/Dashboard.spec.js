// Test away
import React from "react";
import renderer from "react-test-renderer"; 
import { render, cleanup } from "@testing-library/react";
import Dashboard from "./Dashboard";
import * as jestDom from "@testing-library/jest-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { initialState, reducer } from '../reducer/reducer.js'

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

function createWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...renderer.create(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

afterEach(cleanup);

describe("<Dashboard />", () => {

  it("matches snapshot", () => {
    const tree = createWithRedux(<Dashboard />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("defaults to `unlocked` and `open`", () => {
    const { getByText } = renderWithRedux(<Dashboard />);
    getByText(/lock gate/i);
    getByText(/unlocked/i);
  });
});
