export const cart = [];

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