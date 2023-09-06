import React from "react";
import TodoItems from "./todoitem";

export default function TodoLists({ todo }) {
  return (
    <div>
      {todo.map((item, index) => (
        <TodoItems key={index} item={item} />
      ))}
    </div>
  );
}
