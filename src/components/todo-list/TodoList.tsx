import React from "react";
import { TodoItem } from "../todo-item/TodoItem";

interface TodoListProps {
  todos: {
    title: string;
    isCompleted: boolean;
  }[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem title={todo.title} isCompleted={todo.isCompleted} />;
      })}
    </ul>
  );
};
