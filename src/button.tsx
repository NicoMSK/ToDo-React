type ButtonProps = {
  className: string;
  type: "button" | "submit" | "reset";
  children: string;
  taskId: number;
};

export function Button(props: ButtonProps) {
  const { className = "", type, children, taskId } = props;

  return (
    <button className={`button ${className}`} type={type} taskId={taskId}>
      {children}
    </button>
  );
}
