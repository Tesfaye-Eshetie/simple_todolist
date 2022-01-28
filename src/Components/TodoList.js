import { useState } from "react";
import { IoMdTrash } from "react-icons/io";

let nextId = 0;
export default function TodoList() {
  const [item, setItem] = useState("");
  const [lists, setLists] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handeSubmition = () => {
    if (item === "") {
      setLists([...lists]);
    } else {
      setItem("");
      setLists([...lists, { id: nextId++, item: item }]);
    }
  };

  const deleteItem = (id) => {
    alert("Do you realy want that!");
    const newLists = lists.filter((list) => list.id !== id);
    setLists(newLists);
  };

  const clearLists = () => {
    setLists([]);
  };

  return (
    <main>
      <section className="newItemEntry">
        <div className="form">
          <label>Enter a new to do item</label>
          <input
            type="text"
            tabIndex="0"
            autoComplete="off"
            size="40"
            placeholder="Add item"
            value={item}
            onChange={handleChange}
          />
          <button
            className="button"
            title="Add new item"
            aria-label="Enter a new to do item"
            tabIndex="0"
            onClick={handeSubmition}
          >
            +
          </button>
        </div>
      </section>
      <section className="listContainer">
        <div className="listTitle">
          <h1> To Do List </h1>
          <button
            className="button"
            tabIndex="0"
            aria-label="Remove all item from the list"
            title="clear the list"
            onClick={clearLists}
          >
            Clear
          </button>
        </div>
        <hr />
        {lists.map((list) => {
          return (
            <div className="item" key={list.id}>
              <input type="checkbox" tabIndex="0" />
              <label> {list.item} </label>
              <IoMdTrash
                className="delete"
                onClick={() => deleteItem(list.id)}
              ></IoMdTrash>
            </div>
          );
        })}
      </section>
    </main>
  );
}
