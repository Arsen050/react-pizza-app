import produce from "immer";
const SET_ITEM_CART = "SET_ITEM_CART";
const CLEAR_CART = "CLEAR_CART";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
const Cart = (state = initialState, action) =>
  produce((state, draft) => {
    switch (action.type) {
      case SET_ITEM_CART:
        if (
          Object.keys(draft.items).filter((key) => key == action.payload.id) ==
          action.payload.id
        ) {
          return (
            draft.items[action.payload.id].items.push(action.payload),
            (draft.items[action.payload.id].totalPrice =
              Object.keys(arr.items[action.payload.id].items).length *
              action.payload.price),
            (draft.totalPrice += action.payload.price),
            (draft.totalCount += 1)
          );
        } else {
          draft.items = action.payload;
        }
      case CLEAR_CART:
        return {
          items: {},
          totalPrice: 0,
          totalCount: 0,
        };
      default:
        return state;
    }
  });
export default Cart;

const arr = {
  items: {
    1: {
      items: [
        { name: "Obj1", age: 5 },
        { name: "Obj2", age: 6 },
      ],
      totalPrice: 100,
    },
    2: { items: [{ name: "Obj3", age: 10, price: 100 }], totalPrice: 100 },
  },
  totalPrice: 200,
  totalCount: 0,
};

const payload = { id: 2, name: "Arsen", age: 20, price: 100 };

if (Object.keys(arr.items).filter((key) => key == payload.id) == payload.id) {
  arr.items[payload.id].items.push(payload);
  // Общая цена на товары по данном ключу в корзине
  arr.items[payload.id].totalPrice =
    Object.keys(arr.items[payload.id].items).length * payload.price;
  arr.totalPrice += payload.price; // изменяем общую цену товаров в корзине
  arr.totalCount += 1; // изменяем общее количество товаров в корзине
}

/////////////////////////
const key = 2;
//удаление товаров по ключу
const DeleteItemCart = (key) => {
  arr.totalPrice -= arr.items[key].totalPrice;
  arr.items[key].items = [];
  arr.items[key].totalPrice = 0;
};
// добавление товара по ключу
const IncreaseCartItem = (key) => {
  const newItem = arr.items[key].items[0];
  arr.items[key].items.push(newItem);
};
// уменьшение товара по ключу
const DecreaseCartItem = (key) => {
  arr.totalPrice -= arr.items[key].items[0].price;
  arr.items[key].totalPrice -= arr.items[key].items[0].price;
  arr.items[key].items.splice(0, 1);
};
DecreaseCartItem(key);

console.log(arr);





// 
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






      (draft.items[action.payload.id].totalPrice =
        Object.keys(draft.items[action.payload.id].items).length *
        action.payload.price)
    )((draft.totalPrice += action.payload.price))(
      (draft.totalCount += 1)
    );