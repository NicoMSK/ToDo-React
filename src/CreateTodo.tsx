import { useState } from "react";
import { Button } from "./Button";

export type CreateTodoProps = {
  onCreateTodo: (title: string) => void;
};

export function CreateTodo(props: CreateTodoProps) {
  const { onCreateTodo } = props;
  const [inputValue, setInputValue] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onCreateTodo(inputValue);
    setInputValue("");
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <label className="todo__label">Новая задача</label>
      <input
        className="todo__input"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button className="todo__create-button" type="submit">
        Создать
      </Button>
    </form>
  );
}
