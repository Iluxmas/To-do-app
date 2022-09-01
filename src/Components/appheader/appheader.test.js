import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import { getByTestId, render as renderTL, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import AppHeader from "./appheader";

afterEach(cleanup);

it("AppHeader renders without crash", () => {
  renderTL(<AppHeader toDo="1" done="1" />);
});

it("AppHeader renders props correctly", () => {
  const { getByTestId } = renderTL(<AppHeader toDo="3" done="5" />);
  expect(getByTestId("h2")).toHaveTextContent("3 more to do, 5 done");
});

it("AppHeader matches snapshot", () => {
  const tree = renderer.create(<AppHeader toDo="3" done="3" />).toJSON();
  expect(tree).toMatchSnapshot();
});
