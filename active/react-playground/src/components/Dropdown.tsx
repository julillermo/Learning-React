import { useState, type ReactNode } from "react";
import { useTheme } from "../hooks/theme";
import * as styles from "./Dropdown.css";

export type DropdownProps = {
  label: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export function Dropdown({
  label,
  defaultOpen = false,
  children,
}: DropdownProps) {
  const [open, setOpen] = useState(defaultOpen);
  const { theme } = useTheme();

  return (
    <div className={`${styles.dropdown} ${styles.dropdownTheme[theme]}`}>
      <button
        type="button"
        className={`${styles.trigger} ${styles.triggerTheme[theme]}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <span
          className={`${styles.caret} ${open ? styles.caretOpen : ""}`}
          aria-hidden
        >
          ◂
        </span>
      </button>
      <div className={`${styles.content} ${open ? "" : styles.contentClosed}`}>
        {children}
      </div>
    </div>
  );
}
