export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const CLEAR_COMPLETED_ITEMS = 'CLEAR_COMPLETED_ITEMS';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

export function addItem(item) {
    return {
        item,
        type: ADD_NEW_ITEM
    }
}

export function deleteItem(id) {
    return {
        id,
        type: DELETE_ITEM
    }
}

export function updateItem(item) {
    return {
        item,
        type: UPDATE_ITEM
    }
}

export function clearComplitedItems() {
    return {
        type: CLEAR_COMPLETED_ITEMS
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
  }
