const shoppingList = (item) => {
  const list = [
    'suco de maracujá',
    'maçã',
    'sacos de lixo',
    'papel toalha',
    'leite',
  ];
  if (!item) return list;
  list.push(item);
  return list;
};
module.exports = shoppingList;
