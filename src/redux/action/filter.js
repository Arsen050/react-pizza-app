export const setCategory = (index) => ({
  type: "SET_CATEGORY",
  catIndex: index,
});
export const setSort = (type, order) => ({
  type: "SET_SORT_ORDER",
  sortType: type,
  orderType: order,
});
