const SET_ITEMS = "SET_ITEMS";
const SET_LOADED = "SET_LOADED";
const initialState = {
  items: [],
  isLoading: false,
};
const Pizzas = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.items, isLoading: true };
    case SET_LOADED:
      return {
        ...state,
        isLoading: action.bool,
      };
    default:
      return state;
  }
};
export default Pizzas;
