import { ADD_NEW_ITEM, DELETE_ITEM, UPDATE_ITEM, addItem, deleteItem, updateItem } from 'actions';

it('addItem return correct action', () => {
    let item = { id: 1 };
    const result = addItem(item);
    expect(result.type).toEqual(ADD_NEW_ITEM);
    expect(result.item).toEqual(item);
});


it('deleteItem return correct action', () => {
    let id = 1;
    const result = deleteItem(id);
    expect(result.type).toEqual(DELETE_ITEM);
    expect(result.id).toEqual(id);
});


it('updateItem return correct action', () => {
    let item = { id: 1 };
    const result = updateItem(item);
    expect(result.type).toEqual(UPDATE_ITEM);
    expect(result.item).toEqual(item);
});