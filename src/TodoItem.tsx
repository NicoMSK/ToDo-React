type TodoItemProps = {
  id: number;
  title: string;
  isComplite: boolean;
};

export function TodoItem(props: TodoItemProps) {
  const { id, title, isComplite } = props;

  return (
    <li style={{ display: "flex", gap: "8px" }}>
      <input type="checkbox" checked={isComplite} />
      <p>{title}</p>
      <button onClick={() => console.log({ id })}>Редактировать</button>
      <button onClick={() => console.log({ id })}>Удалить</button>
    </li>
  );
}
