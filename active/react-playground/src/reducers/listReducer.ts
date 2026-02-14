import type { ListType } from "../types/reducer";

type ListReducerAction =
  | { type: "add"; value: string }
  | { type: "remove"; index: number }
  | { type: "sort"; order: "asc" | "desc" };

export function listReducer(
  list: ListType[],
  action: ListReducerAction,
): ListType[] {
  switch (action.type) {
    case "add":
      const randomValue = crypto.randomUUID();
      return [
        ...list,
        {
          id: randomValue,
          value: action.value,
        },
      ];
    case "remove":
      return list.filter((_, itemIndex) => itemIndex !== action.index);
    case "sort":
      if (action.order === "asc") {
        return [...list].sort((a, b) => a.value.localeCompare(b.value));
      } else {
        return [...list].sort((a, b) => b.value.localeCompare(a.value));
      }
  }
}
