import axios from "axios";
import { setLoader } from "./loader";

export const setPizzas = (data) => ({
  type: "SET_ITEMS",
  items: data,
});

export const setPizzasThunk = ({ category, type, order }) => (dispatch) => {
  dispatch(setLoader(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${type}&_order=${order}`
    )
    .then((response) => {
      dispatch(setPizzas(response.data));
    });
};
