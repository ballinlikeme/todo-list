import React from "react";
import cn from "classnames";
import { RemoveTodo } from "./remove-todo/RemoveTodo";
import { TodoCompletedState } from "./todo-completed-state/TodoCompletedState";
import { todoStateChange } from "./TodoItemLogic";

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
  return (
    <li className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full ">
      <button
        onClick={() => todoStateChange(title, todos, setTodos)}
        className="flex items-center"
      >
        <TodoCompletedState isCompleted={isCompleted} />
        <span
          className={cn(`text-3xl`, {
            "line-through": isCompleted,
          })}
        >
          {title}
        </span>
      </button>
      <RemoveTodo title={title} todos={todos} setTodos={setTodos} />
    </li>
  );
};
