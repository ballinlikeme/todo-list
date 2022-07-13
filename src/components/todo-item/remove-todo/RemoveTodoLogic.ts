export const removeTodo = (
  title: string,
  setTodos: Function,
  todos: Array<{
    title: string;
    isCompleted: boolean;
  }>
) => {
  const copy = [...todos];
  setTodos(copy.filter((t) => t.title !== title));
};
