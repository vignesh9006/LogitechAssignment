import React from "react";
import {MDBIcon  } from "mdb-react-ui-kit";


export default function TodoInputs({
  newTodo,
  searchMode,
  searchQuery,
  setNewTodo,
  setSearchQuery,
  addToList,
  search,
}) {
  return (
    <div className="d-flex flex-row align-items-center">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder={searchMode ? "Search..." : "Add new..."}
        value={searchMode ? searchQuery : newTodo}
        onChange={(e) => {
          if (searchMode) {
            setSearchQuery(e.target.value);
          } else {
            setNewTodo(e.target.value);
          }
        }}
      />
      <button
        className="btn btn-primary"
        onClick={addToList}
        disabled={searchMode}
      >
        <MDBIcon fas icon="plus" className="me-1" />
        Add
      </button>
      <button className="btn btn-secondary" onClick={search}>
        <MDBIcon fas icon="search" className="me-1" />
        Search
      </button>
    </div>
  );
}
