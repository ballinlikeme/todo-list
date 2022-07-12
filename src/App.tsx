import React, { useState } from "react";
import { AddTodo } from "./components/add-todo/AddTodo";
import { TodoList } from "./components/todo-list/TodoList";

function App() {
  const [todos, setTodos] = useState<Array<object>>([]);
  return (
    <div className="bg-zinc-900 h-screen py-10">
      <div className="container mx-auto text-white font-mono">
        <h1 className="text-6xl mb-10 font-bold">Todo List</h1>
        <div>
          <AddTodo />
        </div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
