import { combineReducers } from "redux";
import cart from "./cart";
import filter from "./filter";
import pizzas from "./pizzas";
const reducers = combineReducers({
  filter,
  pizzas,
  cart,
});
export default reducers;
