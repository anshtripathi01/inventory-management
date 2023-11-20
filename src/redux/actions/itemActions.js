import api from '../../services/api';

export const fetchItems = () => {
  return async (dispatch) => {
    const items = await api.getItems();
    dispatch({ type: 'SET_ITEMS', payload: items });
  };
};

export const addItem = (item) => {
  return async (dispatch) => {
    const newItem = await api.addItem(item);
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };
};

export const editItem = (itemId, updatedItem) => {
  return async (dispatch) => {
    const updated = await api.editItem(itemId, updatedItem);
    dispatch({ type: 'EDIT_ITEM', payload: updated });
  };
};

export const deleteItem = (itemId) => {
  return async (dispatch) => {
    await api.deleteItem(itemId);
    dispatch({ type: 'DELETE_ITEM', payload: itemId });
  };
};
