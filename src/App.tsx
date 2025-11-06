import { useState } from "react";
import { CreateTodo, type CreateTodoProps } from "./CreateTodo";
import { TodoItem } from "./TodoItem";

export function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Задача 1",
      isComplite: false,
    },
    {
      id: 2,
      title: "Задача 2",
      isComplite: false,
    },
  ]);

  const onCreateTodo: CreateTodoProps["onCreateTodo"] = (title: string) => {
    if (title.trim().length > 0) {
      const newTask = {
        id: Date.now(),
        title: title,
        isComplite: false,
      };

      setTask([...tasks, newTask]);
    }
  };

  function editTask(id: number) {
    const searchTaskId = tasks.filter((task) => task.id === id);
  }

  return (
    <div className="todo todo__container">
      <CreateTodo onCreateTodo={onCreateTodo} />
      <ul className="todo__list">
        {tasks.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isComplite={todo.isComplite}
          />
        ))}
      </ul>
    </div>
  );
}
