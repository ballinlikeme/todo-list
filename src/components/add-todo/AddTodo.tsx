import React from "react";
import { keyBoardHandler } from "./AddTodoLogic";

type AddTodoProps = {
  todos: Array<object>;
  setTodos: Function;
};

export const AddTodo: React.FC<AddTodoProps> = ({ todos, setTodos }) => {
  return (
    <input
      className="w-full bg-transparent px-5 py-2 border-zinc-600 border-2 rounded-xl mb-20 text-white outline-none text-2xl"
      type="text"
      onKeyDown={(event) => keyBoardHandler(event, setTodos, todos)}
    />
  );
};
