export const setCartItem = (item) => {
  return {
    type: "SET_ITEM_CART",
    payload: item,
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
export const onDeleteItem = (id) => {
  return {
    type: "DELETE_ITEM_CART",
    payload: id,
  };
};
export const decreaseItem = (id) => {
  return {
    type: "DECREASE_CART_ITEM",
    payload: id,
  };
};
export const increaseItem = (id) => {
  return {
    type: "INCREASE_CART_ITEM",
    payload: id,
  };
};
