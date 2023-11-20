import api from '../../services/api';

export const fetchSales = () => {
  return async (dispatch) => {
    const sales = await api.getSales();
    dispatch({ type: 'SET_SALES', payload: sales });
  };
};

export const addSale = (sale) => {
  return async (dispatch) => {
    const newSale = await api.addSale(sale);
    dispatch({ type: 'ADD_SALE', payload: newSale });
  };
};

export const editSale = (saleId, updatedSale) => {
  return async (dispatch) => {
    const updated = await api.editSale(saleId, updatedSale);
    dispatch({ type: 'EDIT_SALE', payload: updated });
  };
};

export const deleteSale = (saleId) => {
  return async (dispatch) => {
    await api.deleteSale(saleId);
    dispatch({ type: 'DELETE_SALE', payload: saleId });
  };
};
