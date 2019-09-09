import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  SET_VISIBILITY_FILTER,
  CLEAR_COMPLETED_ITEMS,
  VisibilityFilters
} from "../actions";

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  items: [
    { id: 1, text: "test1", status: false },
    { id: 2, text: "test2", status: false },
    { id: 3, text: "test3", status: true },
    { id: 4, text: "test4", status: false }
  ]
};

function todoApp(state, action) {
  if (state === void 0) {
    return initialState;
  }
  let items;
  let filter;
  switch (action.type) {
    case ADD_NEW_ITEM:
      return { ...state, items: [...state.items, action.item] };
    case DELETE_ITEM:
      items = state.items.filter(item => {
        return item.id !== action.id;
      });
      return { ...state, items };
    case UPDATE_ITEM:
      items = state.items.map(item => {
        if (item.id === action.item.id) {
          item = { ...items, ...action.item };
        }
        return item;
      });
      return { ...state, items };
    case CLEAR_COMPLETED_ITEMS:
      items = state.items.filter(item => {
        return !item.status;
      });
      return { ...state, items };
    case SET_VISIBILITY_FILTER:
      var existingFilter = Object.keys(VisibilityFilters).some(name => {
        filter = VisibilityFilters[name];
        return VisibilityFilters[name] === action.filter;
      });
      if(existingFilter){
        return { ...state, filter };
      }else{
        return state;
      }
    default:
      return state;
  }
}

export default todoApp;
