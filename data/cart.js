export let cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1,
  } ];

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

export function removeFromCart(productId){
  const newCart=[];

  cart.forEach((cartItem)=>{
       if(cartItem.productId!=productId)
        newCart.push(cartItem)
  });

  cart=newCart;
}