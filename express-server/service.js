const getUsers = () => {
  return [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
};

const getOrders = () => {
  return [
    { id: 1, item: 'Laptop', quantity: 1 },
    { id: 2, item: 'Phone', quantity: 2 },
  ];
};

module.exports = {
  getUsers,
  getOrders,
};