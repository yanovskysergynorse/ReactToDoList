import React, { useState } from "react";
import Heading from "./Heading";

function App() {
  const [list, setList] = useState([<li>Item</li>]);
  const [listItem, setListItem] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setListItem(<li>{value}</li>);
  }
  function addElement(event) {
    setList((prevValue) => {
      return [...prevValue, listItem];
    });
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input type="text" name="inputItem" onChange={handleChange} />
        <button type="submit" onClick={addElement}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;
