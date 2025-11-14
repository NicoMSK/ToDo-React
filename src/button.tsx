type ButtonProps = {
  className: string;
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button(props: ButtonProps) {
  const { className, type, children, onClick } = props;

  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
