import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/action/filter";

function Categories({ items, activeCategoryIndex }) {
  const dispatch = useDispatch();
  const OnSelectorCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => OnSelectorCategory(null)}
          className={activeCategoryIndex === null ? "active" : ""}
        >
          Все
        </li>
        {items.map((pizza, index) => (
          <li
            key={index}
            className={activeCategoryIndex === index ? "active" : ""}
            onClick={() => OnSelectorCategory(index)}
          >
            {pizza}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
