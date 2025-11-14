import { useState, useEffect } from "react";
import { CreateTodo, type CreateTodoProps } from "./CreateTodo";
import { TodoItem } from "./TodoItem";

type Todo = {
  id: number;
  title: string;
  isComplite: boolean;
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const rawTodos = localStorage.getItem('todos');
      return rawTodos ? JSON.parse(rawTodos) : [];
    } catch (error) {
      console.error('Не удалось выполнить парсинг задач из localStorage: ', error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
    setTodos(prev =>
      prev.filter((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  }

  function deleteTask(id: number) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  function doneTask(id: number, isComplite: boolean) {
    setTodos(prev =>
      prev.filter((todo) => {
        if (todo.id === id) {
          todo.isComplite = !isComplite;
        }
        return todo;
      })
    );
  }

  return (
    <div className="todo todo__container">
      <CreateTodo onCreateTodo={onCreateTodo} />
      <ul className="todo__list">
        {todos.length === 0 && (
          <p className="todo__list-text">⚠️ Список задач пуст 🚫</p>
        )}
        {todos.map((todo) => (
          <li
            className="todo__item"
            key={todo.id}
          >
            <TodoItem
              id={todo.id}
              title={todo.title}
              isComplite={todo.isComplite}
              editTask={editTask}
              deleteTask={deleteTask}
              doneTask={doneTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
