const BASE_URL = 'https://assignment-18-anshtripathi.ansh-tripathi.repl.co/api'; // Assuming your API is served on the same domain

const api = {
  getItems: async () => {
    const response = await fetch(`${BASE_URL}/items`);
    const {items} = await response.json();
    console.log(items);
    return items;
  },

  addItem: async (item) => {
    const response = await fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    return await response.json();
  },

  editItem: async (itemId, updatedItem) => {
    const response = await fetch(`${BASE_URL}/items/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });
    return await response.json();
  },

  deleteItem: async (itemId) => {
    const response = await fetch(`${BASE_URL}/items/${itemId}`, {
      method: 'DELETE',
    });
    return await response.json();
  },

  getSales: async () => {
    const response = await fetch(`${BASE_URL}/sales`);
    const {sales} = await response.json()
    console.log(sales);
    return sales
  },

  addSale: async (sale) => {
    const response = await fetch(`${BASE_URL}/sales`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sale),
    });
    return await response.json();
  },

  editSale: async (saleId, updatedSale) => {
    const response = await fetch(`${BASE_URL}/sales/${saleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSale),
    });
    return await response.json();
  },

  deleteSale: async (saleId) => {
    const response = await fetch(`${BASE_URL}/sales/${saleId}`, {
      method: 'DELETE',
    });
    return await response.json();
  },
};

export default api;
