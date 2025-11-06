import { useState } from "react";
import { Button } from "./button";

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
    <form onSubmit={onSubmit}>
      <label>Новая задача</label>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button className="#" type="submit">
        Создать
      </Button>
    </form>
  );
}
