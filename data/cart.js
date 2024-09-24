export const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity: 1,
  }
];

export function addToCart(productId) {
  const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
  let matchingItem;

  cart.forEach(item => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
    return;
  }

  cart.push({
    productId,
    quantity
  });
}