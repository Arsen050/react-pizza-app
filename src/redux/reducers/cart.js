import produce from "immer";

const SET_ITEM_CART = "SET_ITEM_CART";
const CLEAR_CART = "CLEAR_CART";
const DELETE_ITEM_CART = "DELETE_ITEM_CART";
const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const Inc_Dec_Item = (type, draft, id) => {
  let specificItem = draft.items[id];
  let specificItemPrice = draft.items[id].items[0].price;
  if (type === "INCREASE") {
    let newItem = draft.items[id].items[0];
    specificItem.items.push(newItem);
    specificItem.totalPrice += specificItemPrice;
    specificItem.totalCount += 1;
    draft.totalPrice += specificItemPrice;
    draft.totalCount += 1;
  } else {
    if (specificItem.totalCount > 1) {
      specificItem.items.slice(1);
      specificItem.totalPrice -= specificItemPrice;
      specificItem.totalCount -= 1;
      draft.totalPrice -= specificItemPrice;
      draft.totalCount -= 1;
    }
  }
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ITEM_CART:
        const getTotalPrice = (arr) =>
          arr.reduce((sum, obj) => obj.price + sum, 0);
        const currentItemsPizzas = !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id].items, action.payload];

        const newItems = {
          ...state.items,
          [action.payload.id]: {
            items: currentItemsPizzas,
            totalPrice: getTotalPrice(currentItemsPizzas),
            totalCount: currentItemsPizzas.length,
          },
        };
        const items = Object.values(newItems).map((obj) => obj.items);
        const allPizzas = [].concat.apply([], items);
        return {
          ...state,
          items: newItems,
          totalCount: allPizzas.length,
          totalPrice: getTotalPrice(allPizzas),
        };
      case CLEAR_CART:
        return {
          items: {},
          totalPrice: 0,
          totalCount: 0,
        };
      case DELETE_ITEM_CART:
        draft.totalPrice -= draft.items[action.payload].totalPrice;
        draft.totalCount -= draft.items[action.payload].totalCount;
        delete draft.items[action.payload];
        break;
      case INCREASE_CART_ITEM:
        Inc_Dec_Item("INCREASE", draft, action.payload);
        break;
      case DECREASE_CART_ITEM:
        Inc_Dec_Item("DECREASE", draft, action.payload);
        break;
      default:
        return state;
    }
  });
