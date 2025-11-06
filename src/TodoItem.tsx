import { Button } from "./Button";

type TodoItemProps = {
  id: number;
  title: string;
  isComplite: boolean;
};

export function TodoItem(props: TodoItemProps) {
  const { id, title, isComplite } = props;

  return (
    <li className="todo__item">
      <input type="checkbox" checked={isComplite} />
      <p>{title}</p>
      <input
        className="todo__item-input visually-hidden "
        type="text"
        value={title}
      />
      <div className="todo__wrapper-btn">
        <Button className="todo__edit-button" type="button" taskId={id}>
          Редактировать
        </Button>
        <Button className="todo__delete-button" type="button" taskId={id}>
          Удалить
        </Button>
      </div>
    </li>
  );
}
