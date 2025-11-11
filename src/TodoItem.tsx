import { useState } from "react";
import { Button } from "./Button";

type TodoItemProps = {
  id: number;
  title: string;
  isComplite: boolean;
  editTask: (id: number, title: string) => void;
  deleteTask: (id: number) => void;
};

export function TodoItem(props: TodoItemProps) {
  const { id, title, isComplite, editTask, deleteTask } = props;
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
      <input type="checkbox" checked={isComplite} />
      <p className="todo__text" style={viewMode}>
        {title}
      </p>
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
