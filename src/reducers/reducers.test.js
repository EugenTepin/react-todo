import todoApp from "./index";
import {
  addItem,
  deleteItem,
  updateItem,
  clearComplitedItems,
  VisibilityFilters,
  setVisibilityFilter
} from "actions";

const testState = {
  filter: VisibilityFilters.SHOW_ALL,
  items: [
    { id: 1, text: "test1", status: false },
    { id: 2, text: "test2", status: false },
    { id: 3, text: "test3", status: true },
    { id: 4, text: "test4", status: false }
  ]
};
//const testState = { items: [] };
it("Reducer reterns correct initial state", () => {
  expect(todoApp(void 0, void 0)).toEqual(testState);
});

it("Reducer reterns previous state if action is unknown or undefined", () => {
  expect(todoApp(testState, { type: "UNKNOWN_TYPE" })).toEqual(testState);
});

it("Reducer handles ADD_NEW_ITEM action correctly", () => {
  let item = {
    id: 99,
    text: "aaaaa"
  };
  let result = todoApp(testState, addItem(item));
  expect(result).toEqual({
    ...testState,
    items: [...testState.items, item]
  });
});

it("Reducer handles DELETE_ITEM action correctly", () => {
  let id = testState.items[0].id;
  let result = todoApp(testState, deleteItem(id));
  let withoutFirstElement = result.items.every(item => {
    return item.id !== id;
  });
  expect(withoutFirstElement).toBeTruthy();
});

it("Reducer handles UPDATE_ITEM action correctly", () => {
  let updatedItem = {
    id: testState.items[0].id,
    text: "aaaaa"
  };
  let result = todoApp(testState, updateItem(updatedItem));
  let found = result.items.some(item => {
    return item.id === updatedItem.id && item.text === updatedItem.text;
  });
  expect(found).toBeTruthy();
});

it("Reducer handles CLEAR_COMPLETED_ITEMS action correctly", () => {
  let result = todoApp(testState, clearComplitedItems());
  let allIncompleted = result.items.every(item => {
    return !item.status;
  });
  expect(allIncompleted).toBeTruthy();
});


it("Reducer handles SET_VISIBILITY_FILTER action (SHOW_ALL)", () => {
  let result = todoApp(testState, setVisibilityFilter(VisibilityFilters.SHOW_ALL));
  expect(result.filter).toBe(VisibilityFilters.SHOW_ALL);
});

it("Reducer handles SET_VISIBILITY_FILTER action (SHOW_COMPLETED)", () => {
  let result = todoApp(testState, setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
  expect(result.filter).toBe(VisibilityFilters.SHOW_COMPLETED);
});

it("Reducer handles SET_VISIBILITY_FILTER action (SHOW_ACTIVE)", () => {
  let result = todoApp(testState, setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
  expect(result.filter).toBe(VisibilityFilters.SHOW_ACTIVE);
});

it("Reducer handles SET_VISIBILITY_FILTER action (unknown)", () => {
  let result = todoApp(testState, setVisibilityFilter(VisibilityFilters.UNKNOWN));
  expect(result.filter).toBe(testState.filter);
});