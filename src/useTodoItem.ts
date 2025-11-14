import { useState, useMemo, useRef, useEffect } from "react";

export function useTodoItem(title:string) {
  const [editing, setEditing] = useState(false);
  const [titleError, setTitleError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const handleEditing = () => {
    if (!editing) {
      setEditing(true);
      setTitleError('');
    } else {
      if (title.trim().length === 0) {
        setTitleError("Поле не может быть пустым");
        return;
      }

      setEditing(false);
      setTitleError('');
    }
  };

  const handleUpdatedDone = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (title.trim().length === 0) {
        setTitleError("Поле не может быть пустым");
        return;
      }

      setEditing(false);
      setTitleError('');
    }
  };

  const styles = useMemo(() => {
    const styles = {
      viewMode: { display: "block" },
      editMode: { display: "block" },
    }

    if (editing) {
      styles.viewMode.display = "none";
    } else {
      styles.editMode.display = "none";
    }

    return styles
  }, [editing])

  return { inputRef, titleError, editing, styles, handleEditing, handleUpdatedDone }
}
