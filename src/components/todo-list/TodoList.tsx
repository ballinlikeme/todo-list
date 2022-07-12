import React from "react";
import { TodoItem } from "../todo-item/TodoItem";

type TodoListProps = {
  setTodos: Function;
  todos: {
    title: string;
    isCompleted: boolean;
  }[];
};

export const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            setTodos={setTodos}
            todos={todos}
            title={todo.title}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </ul>
  );
};
