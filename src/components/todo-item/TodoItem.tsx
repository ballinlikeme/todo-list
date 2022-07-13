import React from "react";
import { BsTrash, BsCheck } from "react-icons/bs";
import cn from "classnames";

type TodoItemProps = {
  title: string;
  isCompleted: boolean;
  todos: {
    title: string;
    isCompleted: boolean;
  }[];
  setTodos: Function;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  title,
  isCompleted,
  todos,
  setTodos,
}) => {
  const todoStateChange = () => {
    const copy = [...todos];
    const current = copy.find((t) => t.title === title);
    current!.isCompleted = !current!.isCompleted;
    setTodos(copy);
  };

  const removeTodo = () => {
    const copy = [...todos];

    setTodos(copy.filter((t) => t.title !== title));
  };

  return (
    <li className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full ">
      <button onClick={todoStateChange} className="flex items-center">
        <div className="mr-5 border-2 border-pink-400 rounded-lg w-7 h-7">
          {isCompleted && (
            <BsCheck size={24} className="text-zinc-900 bg-pink-400" />
          )}
        </div>
        <span
          className={cn(`text-3xl`, {
            "line-through": isCompleted,
          })}
        >
          {title}
        </span>
      </button>
      <button onClick={removeTodo}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-pink-400 ease-in transition-colors duration-300"
        />
      </button>
    </li>
  );
};
