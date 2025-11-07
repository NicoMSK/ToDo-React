type ButtonProps = {
  className: string;
  type: "button" | "submit" | "reset";
  children: string;
  taskId?: number;
  onClick?: () => void;
};

export function Button(props: ButtonProps) {
  const { className = "", type, children, taskId, onClick } = props;

  return (
    <button
      className={`button ${className}`}
      type={type}
      taskId={taskId}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
