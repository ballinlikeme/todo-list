import React from "react";
import { BsCheck } from "react-icons/bs";

type TodoCompletedStateProps = {
  isCompleted: boolean;
};

export const TodoCompletedState: React.FC<TodoCompletedStateProps> = ({
  isCompleted,
}) => {
  return (
    <div className="mr-5 border-2 border-pink-400 rounded-lg w-7 h-7">
      {isCompleted && (
        <BsCheck size={24} className="text-zinc-900 bg-pink-400" />
      )}
    </div>
  );
};
