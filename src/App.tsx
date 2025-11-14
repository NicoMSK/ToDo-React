import { useState } from "react";
import { CreateTodo, type CreateTodoProps } from "./CreateTodo";
import { TodoItem } from "./TodoItem";

export function App() {
  const [todos, setTodos] = useState([
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

      setTodos([...todos, newTask]);
    }
  };

  function editTask(id: number, title: string) {
    setTodos(
      todos.filter((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }

        return todo;
      })
    );
  }

  function deleteTask(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
    //setTodos(prev => prev.filter(todo => todo.id !== id));
    // нужно разобрать эту срочку кода подробнее
  }

  return (
    <div className="todo todo__container">
      <CreateTodo onCreateTodo={onCreateTodo} />
      <ul className="todo__list">
        {todos.length === 0 && (
          <p className="todo__list-text">Список задач пуст :(</p>
        )}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isComplite={todo.isComplite}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
