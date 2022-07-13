import React, { useState, useEffect } from "react";
import { AddTodo } from "./components/add-todo/AddTodo";
import { TodoList } from "./components/todo-list/TodoList";

function App() {
  const initialValue = localStorage.getItem("todos");
  const [todos, setTodos] = useState<
    Array<{
      title: string;
      isCompleted: boolean;
    }>
  >(JSON.parse(initialValue!) || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-zinc-900 h-screen py-10">
      <div className="container mx-auto text-white font-mono">
        <h1 className="text-6xl mb-10 font-bold">Todo List</h1>
        <div>
          <AddTodo todos={todos} setTodos={setTodos} />
        </div>
        <TodoList setTodos={setTodos} todos={todos} />
      </div>
    </div>
  );
}

export default App;
