export const todoStateChange = (
  title: string,
  todos: Array<{
    title: string;
    isCompleted: boolean;
  }>,
  setTodos: Function
) => {
  const copy = [...todos];
  const current = copy.find((t) => t.title === title);
  current!.isCompleted = !current!.isCompleted;
  setTodos(copy);
};
