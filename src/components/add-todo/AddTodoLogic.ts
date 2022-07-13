import React from "react";

export const keyBoardHandler = (
  event: React.KeyboardEvent<HTMLInputElement>,
  setterFunction: Function,
  todos: Array<object>
) => {
  if (event.key === "Enter") {
    setterFunction([
      {
        title: event.target.value,
        isCompleted: false,
      },
      ...todos,
    ]);

    event.target.value = "";
  }
};
