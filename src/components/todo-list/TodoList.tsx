import React from "react";
import { TodoItem } from "../todo-item/TodoItem";

type TodoListProps = {
  todos: Array<object>;
};

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem />;
      })}
    </ul>
  );
};
