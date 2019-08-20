// Test away
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, cleanup } from "@testing-library/react";
import Display from "./Display";
import * as jestDom from "@testing-library/jest-dom";

expect.extend(jestDom);
afterEach(cleanup);

describe("<Display />", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('displays if gate is open/closed and if it is locked/unlocked', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
    getByText(/open/i);
  });

  it('displays `Closed` if the `closed` prop is `true` ', () => {
  const { getByText } = render(<Display closed={true} />);
  getByText(/closed/i)
  })

  it('displays `Open` if the `closed` prop is `false` ', () => {
  const { getByText } = render(<Display closed={false} />);
  getByText(/open/i)
  })

  it('displays `Locked` if the `locked` prop is `true` ', () => {
  const { getByText } = render(<Display locked={true} />);
  getByText(/^locked/i)
  })

  it('displays `Unlocked` if otherwise ', () => {
  const { getByText } = render(<Display locked={false} />);
  getByText(/unlocked/i)
  })

  it('when `locked`  use the `red-led` class', () => {
  const { getByText } = render(<Display locked={true} />);
  expect(getByText(/^locked/i).className).toContain('red-led')
  })

  it('when `closed` use the `red-led` class', () => {
  const { getByText } = render(<Display closed={true} />);
  expect(getByText(/closed/i).className).toContain('red-led')
  })

  it('unlocked` or `open` use the `green-led` class', () => {
  const { getByText } = render(<Display locked={false} />);
  expect(getByText(/unlocked/i).className).toContain('green-led')
  })

  it('unlocked` or `open` use the `green-led` class', () => {
  const { getByText } = render(<Display closed={false} />);
  expect(getByText(/open/i).className).toContain('green-led')
  })

});
