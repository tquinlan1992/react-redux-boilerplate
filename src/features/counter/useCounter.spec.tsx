import {
  renderHook,
  act,
  WrapperComponent,
} from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import useCounter from "./useCounter";

const wrapper: WrapperComponent<{}> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter(), { wrapper });

  act(() => {
    result.current.onIncrementClick();
  });

  expect(result.current.count).toBe(1);

  act(() => {
    result.current.onDecrementClick();
  });

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.incrementByAmount();
  });

  expect(result.current.count).toBe(2);

  act(() => {
    result.current.incrementIfOdd();
  });

  expect(result.current.count).toBe(2);

  act(() => {
    result.current.onIncrementClick();
  });

  act(() => {
    result.current.incrementIfOdd();
  });

  expect(result.current.count).toBe(5);

  // Unsure yet how to test async
  // act(() => {
  //   result.current.incrementAsync();
  // });

  // expect(result.current.count).toBe(7);
});
