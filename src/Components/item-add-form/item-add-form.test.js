import React from "react";
import { getByTestId, render, fireEvent, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import ItemAddForm from "./item-add-form";

afterEach(cleanup);

it("ItemAddForm renders without crash", () => {
  render(<ItemAddForm />);
});

it("ItemAddForm initial state is null", () => {
  const { container } = render(<ItemAddForm />);
  const inputName = getByTestId(container, "formInput");
  expect(inputName.value.length).toBe(0);
});

it("ItemAddForm change on input", () => {
  const { container } = render(<ItemAddForm />);
  const inputName = getByTestId(container, "formInput");
  fireEvent.change(inputName, { target: { value: "Alabai" } });
  expect(inputName.value).toBe("Alabai");
});

// it("ItemAddForm renders props correctly", () => {
//   const { getByTestId } = renderTL(<ItemAddForm />);
//   expect(getByTestId("formInput").value).toBe();
// });

// export default function ItemAddForm(props) {
//   const [label, setLabel] = useState("");

//   function onSubmit(event) {
//     event.preventDefault();
//     props.onAdd(label);
//     setLabel("");
//   }

//   return (
//     <form className="item-add-form d-flex" onSubmit={(evt) => onSubmit(evt)}>
//       <input
//         type="text"
//         className="form-control"
//         onChange={(event) => setLabel(event.target.value)}
//         placeholder="What needs to be done?"
//         value={label}
//         required
//       />
//       <button className="btn btn-outline-secondary">Add Item</button>
//     </form>
//   );
// }
