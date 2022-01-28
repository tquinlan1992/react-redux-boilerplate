import React from "react";
import renderer from "react-test-renderer";
import { CounterPresentational, CounterPresentationalProps } from "./Counter";

it("renders correctly", () => {
  const props: CounterPresentationalProps = {
    count: 2,
    incrementAmount: "1",
    incrementValue: 0,
    onDecrementClick: jest.fn(),
    onIncrementClick: jest.fn(),
    setIncrementAmount: jest.fn(),
    incrementByAmount: jest.fn(),
    incrementAsync: jest.fn(),
    incrementIfOdd: jest.fn(),
  };
  const tree = renderer.create(<CounterPresentational {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
