export const cart=[];

export function addToCart(productId) {
  const selectElement = document.querySelector(
    `.js-quantity[data-product-id="${productId}"]`
  );
  let selectValue = Number(selectElement.value);
  let matchingItem;
  cart.forEach((CartItem) => {
    if (productId === CartItem.productId) {
      matchingItem = CartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += selectValue;
  } else {
    cart.push({
      productId: productId,
      quantity: selectValue,
    });
  }
  selectElement.value = "1";
}
