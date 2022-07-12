import React from "react";
import { BsTrash, BsCheck } from "react-icons/bs";

export const TodoItem: React.FC = () => {
  return (
    <li className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full ">
      <button className="flex items-center">
        <div className="border-2 rounded-lg border-pink-400 w-7 h-7 mr-3">
          <BsCheck size={24} className="text-zinc-900 bg-pink-400" />
        </div>
        <span className="text-3xl">First Todo</span>
      </button>
      <button>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-pink-400 ease-in transition-colors duration-300"
        />
      </button>
    </li>
  );
};
