import React, { useContext } from "react";
import { recipeContext } from "../Contexts/RecipeContext";
import "../Styles/Filter.css"
const Filters = () => {
  const { setfilterState, filterState } = useContext(recipeContext);
  return (
    <div className="filter-main">
      <input
        type="text"
        placeholder="search recipe by Name/Cuisine/Ingredients !"
        value={filterState.text}
        onChange={(e) =>
          setfilterState((state) => ({ ...state, text: e.target.value }))
        }
        className="filter-input"
      />
      <span>
        <strong>Filter :</strong>
      </span>
      <input
        type="radio"
        value="Name"
        name="filter"
        onChange={(e) =>
          setfilterState((state) => ({ ...state, radio: e.target.value }))
        }
        checked={filterState.radio === "Name"}
      />{" "}
      Name
      <input
        type="radio"
        value="Ingredients"
        name="filter"
        onChange={(e) =>
          setfilterState((state) => ({ ...state, radio: e.target.value }))
        }
        checked={filterState.radio === "Ingredients"}
      />{" "}
      Ingredients
      <input
        type="radio"
        value="Cuisine"
        name="filter"
        onChange={(e) =>
          setfilterState((state) => ({ ...state, radio: e.target.value }))
        }
        checked={filterState.radio === "Cuisine"}
      />{" "}
      Cuisine
    </div>
  );
};

export default Filters;
