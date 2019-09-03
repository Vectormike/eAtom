export const addItemToCart = (initialItems, newItem) => {
  // Find existing items thhat where added already
  const existingItem = initialItems.find(
    initialItem => initialItem.id === newItem.id,
  );

  // Loop existing, and create a new object with amount of quantity instead
  if (existingItem) {
    return initialItems.map(initialItem =>
      initialItem.id === newItem.id
        ? { ...initialItem, quantity: initialItem.quantity + 1 }
        : initialItem,
    );
  }

  return [...initialItems, { ...newItem, quantity: 1 }];
};
