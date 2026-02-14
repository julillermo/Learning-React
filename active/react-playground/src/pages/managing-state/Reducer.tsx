import { useReducer, useState } from "react";
import { useTheme } from "../../hooks/theme";
import { listReducer } from "../../reducers/listReducer";
import * as styles from "./Reducer.css";

export function Reducer() {
  const { theme } = useTheme();
  const [list, listDispatch] = useReducer(listReducer, [
    { id: "item-1", value: "C React Playground" },
    { id: "item-2", value: "B useReducer" },
    { id: "item-3", value: "A useContext" },
  ]);
  const [liveTextInput, setLiveTextInput] = useState<string | null>(null);
  const [sortOrderAsc, setSortOrderAsc] = useState(true);

  const handleAddItem = () => {
    if (!liveTextInput) return;
    listDispatch({ type: "add", value: liveTextInput ?? "" });
    setLiveTextInput(null);
  };

  const handleRemoveItem = (index: number) => {
    listDispatch({ type: "remove", index });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLiveTextInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleSortItems = () => {
    listDispatch({ type: "sort", order: sortOrderAsc ? "asc" : "desc" });
    setSortOrderAsc((prev) => !prev);
  };

  return (
    <section className={styles.wrapper}>
      <h1>Reducer Demo</h1>
      <div className={styles.listStack}>
        {list.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={styles.rowTheme[theme]}
            role="group"
          >
            <span className={styles.itemText}>{item.value}</span>
            <button
              className={styles.subtleButton[theme]}
              onClick={() => handleRemoveItem(index)}
              type="button"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className={styles.inputRow}>
        <div className={`${styles.rowTheme[theme]} ${styles.inputRow}`}>
          <input
            type="text"
            value={liveTextInput ?? ""}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Add another item"
            className={styles.inputTheme[theme]}
          />
          <button
            className={styles.primaryButton[theme]}
            onClick={handleAddItem}
            type="button"
          >
            Add Item
          </button>
        </div>
        <button
          onClick={handleSortItems}
          className={styles.primaryButton[theme]}
          type="button"
        >
          Sort Items
        </button>
      </div>
    </section>
  );
}
