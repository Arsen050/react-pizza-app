import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlockLoading, Categories, PizzaBlock, Sort } from "../Components";
import { setCartItem } from "../redux/action/cart";
import { setPizzasThunk } from "../redux/action/pizzas";
const itemsCategories = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const itemsSort = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "ценa", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];
const Home = React.memo(function Home() {
  const dispatch = useDispatch();
  const activeCategoryIndex = useSelector(({ filter }) => filter.category);
  const activeSortType = useSelector(({ filter }) => filter.sort);
  const cartItems = useSelector(({ cart }) => cart.items);
  const itemsPizzas = useSelector((state) => state.pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const addCartItem = (obj) => {
    dispatch(setCartItem(obj));
  };
  useEffect(() => {
    dispatch(
      setPizzasThunk({
        category: activeCategoryIndex,
        type: activeSortType.type,
        order: activeSortType.order,
      })
    );
  }, [activeCategoryIndex, activeSortType, dispatch]);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategoryIndex={activeCategoryIndex}
            items={itemsCategories}
          />
          <Sort activeSortType={activeSortType} items={itemsSort} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? itemsPizzas.map((pizza) => (
                <PizzaBlock
                  setCartItem={(obj) => addCartItem(obj)}
                  key={pizza.id}
                  addedCount={
                    cartItems[pizza.id] && cartItems[pizza.id].items.length
                  }
                  {...pizza}
                />
              ))
            : Array(9)
                .fill(0)
                .map((_, index) => <BlockLoading key={index} />)}
        </div>
      </div>
    </div>
  );
});
export default Home;
