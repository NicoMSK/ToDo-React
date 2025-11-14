import { useState } from "react";
import { Button } from "./Button";

type TodoItemProps = {
  id: number;
  title: string;
  isComplite: boolean;
  editTask: (id: number, title: string) => void;
  deleteTask: (id: number) => void;
  doneTask: (id: number, isComplite: boolean) => void;
};

export function TodoItem(props: TodoItemProps) {
  const { id, title, isComplite, editTask, deleteTask, doneTask } = props;
  const [editing, setEditing] = useState(false);
  const [titleMode, setTitleMode] = useState(false);
  const viewMode = { display: "block" };
  const editMode = { display: "block" };

  const handleEditing = () => {
    if (!editing) {
      setEditing(true);
      setTitleMode(false);
    } else {
      if (title.trim().length === 0) {
        setTitleMode(true);
        return;
      }

      setEditing(false);
      setTitleMode(false);
    }
  };

  const handleUpdatedDone = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (title.trim().length === 0) {
        setTitleMode(true);
        return;
      }

      setEditing(false);
      setTitleMode(false);
    }
  };

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className="todo__item">
      <input
        className="todo__checkbox"
        type="checkbox"
        id={id.toString()}
        checked={isComplite}
        onChange={() => doneTask(id, isComplite)}
      />
      <label
        className={`todo__text ${isComplite && "todo__text--checked"}`}
        htmlFor={id.toString()}
        style={viewMode}
      >
        {title}
      </label>
      <input
        className="todo__item-input"
        type="text"
        value={title}
        style={editMode}
        onChange={(e) => editTask(id, e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
      <p className="todo__text-error">
        {titleMode && "Поле не может быть пустым"}
      </p>
      <div className="todo__wrapper-btn">
        <Button
          className="todo__edit-button"
          type="button"
          taskId={id}
          onClick={handleEditing}
        >
          {editing ? "OK" : "Редактировать"}
        </Button>
        <Button
          className="todo__delete-button"
          type="button"
          taskId={id}
          onClick={() => deleteTask(id)}
        >
          Удалить
        </Button>
      </div>
    </li>
  );
}
