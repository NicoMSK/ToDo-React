type ButtonProps = {
  className: string;
  type: "button" | "submit" | "reset";
  children: string;
};

export function Button(props: ButtonProps) {
  const { className = "", type, children } = props;

  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  );
}
