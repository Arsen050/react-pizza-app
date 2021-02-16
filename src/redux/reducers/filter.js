const SET_CATEGORY = "SET_CATEGORY";
const SET_SORT_ORDER = "SET_SORT_ORDER";
const initialState = {
  category: null,
  sort: { type: "rating", order: "desc" },
};
const Filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, category: action.catIndex };
    case SET_SORT_ORDER:
      return {
        ...state,
        sort: { type: action.sortType, order: action.orderType },
      };
    default:
      return state;
  }
};
export default Filter;
