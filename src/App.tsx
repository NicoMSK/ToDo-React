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

  return (
    <>
      <CreateTodo onCreateTodo={onCreateTodo} />
      <ul>
        {tasks.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isComplite={todo.isComplite}
          />
        ))}
      </ul>
    </>
  );
}
