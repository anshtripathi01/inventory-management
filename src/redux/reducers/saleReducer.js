const initialState = {
    sales: [],
  };
  
  const saleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SALES':
        return {
          ...state,
          sales: action.payload,
        };
      case 'ADD_SALE':
        return {
          ...state,
          sales: [...state.sales, action.payload],
        };
      case 'EDIT_SALE':
        const updatedSales = state.sales.map((sale) =>
          sale.id === action.payload.id ? action.payload : sale
        );
        return {
          ...state,
          sales: updatedSales,
        };
      case 'DELETE_SALE':
        const filteredSales = state.sales.filter((sale) => sale.id !== action.payload);
        return {
          ...state,
          sales: filteredSales,
        };
      default:
        return state;
    }
  };
  
  export default saleReducer;
  