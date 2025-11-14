import { memo } from "react";
import { Button } from "./Button";
import { useTodoItem } from "./useTodoItem";

type TodoItemProps = {
  id: number;
  title: string;
  isComplite: boolean;
  editTask: (id: number, title: string) => void;
  deleteTask: (id: number) => void;
  doneTask: (id: number, isComplite: boolean) => void;
};

export const TodoItem = memo(TodoItemInner)
export function TodoItemInner(props: TodoItemProps) {
  const { id, title, isComplite, editTask, deleteTask, doneTask } = props;

  const todoItemLogic = useTodoItem(title);
  const { editing, titleError, inputRef, styles, handleEditing, handleUpdatedDone } = todoItemLogic

  return (
    <>
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
        style={styles.viewMode}
      >
        {title}
      </label>
      <input
        className="todo__item-input"
        ref={inputRef}
        type="text"
        value={title}
        style={styles.editMode}
        onChange={(e) => { editTask(id, e.target.value) }}
        onKeyDown={handleUpdatedDone}
      />
      {Boolean(titleError) &&
        <p className="todo__text-error">
          {titleError}
        </p>}
      <div className="todo__wrapper-btn">
        <Button
          className="todo__edit-button"
          type="button"
          onClick={handleEditing}
        >
          {editing ? "OK" : "Редактировать"}
        </Button>
        <Button
          className="todo__delete-button"
          type="button"
          onClick={() => deleteTask(id)}
        >
          Удалить
        </Button>
      </div>
    </>
  );
}
