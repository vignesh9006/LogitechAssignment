import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import TodoLists from "./todolists";
import TodoInputs from "./todoinputs";

export default function Todolist() {
  const data = ["Learn JavaScript", "Learn React", "Build a React App"];

  const [todo, setTodo] = useState(data);
  const [newTodo, setNewTodo] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState(false);

  const addToList = () => {
    if (!searchMode && newTodo.trim() !== '') {
      const updatedTodo = [...todo, newTodo];
      setTodo(updatedTodo);
      setNewTodo('');
    }
  };

  const search = () => {
    if (searchQuery.trim() !== '') {
      const filteredItems = todo.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setTodo(filteredItems);
    }
    setSearchMode(true);
  };

  return (
    <MDBContainer className="py-5">
      {/* ... */}
      <TodoInputs
        newTodo={newTodo}
        searchMode={searchMode}
        searchQuery={searchQuery}
        setNewTodo={setNewTodo}
        setSearchQuery={setSearchQuery}
        addToList={addToList}
        search={search}
      />
      <TodoLists todo={todo} />
      {/* ... */}
    </MDBContainer>
  );
}
