import React from "react";
import { BsTrash } from "react-icons/bs";
import { removeTodo } from "./RemoveTodoLogic";

type RemoveTodoProps = {
  title: string;
  setTodos: Function;
  todos: Array<{
    title: string;
    isCompleted: boolean;
  }>;
};

export const RemoveTodo: React.FC<RemoveTodoProps> = ({
  title,
  setTodos,
  todos,
}) => {
  return (
    <button onClick={() => removeTodo(title, setTodos, todos)}>
      <BsTrash
        size={22}
        className="text-gray-600 hover:text-pink-400 ease-in transition-colors duration-300"
      />
    </button>
  );
};
