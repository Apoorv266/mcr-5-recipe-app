import React, { useContext } from "react";
import Filters from "./Filters";
import RecipeCard from "./RecipeCard";
import { recipeContext } from "../Contexts/RecipeContext";
import "../Styles/RecipeCard.css";

const RecipeList = () => {
  const { filterFunc, setmodal } = useContext(recipeContext);
  return (
    <div>
      <Filters />
      <div>
        <h1>All Recipies : </h1>
        {filterFunc().length > 0 ? <div className="recipe-list-card">
          {filterFunc().map((item) => (
            <RecipeCard item={item} key={item.id}/>
          ))}

          <div className="add-img-container">
            <img
              src="https://cdn.icon-icons.com/icons2/933/PNG/512/rounded-add-button_icon-icons.com_72592.png"
              alt=""
              srcset=""
              width={"50px"}
              onClick={() => setmodal(true)}
            />
          </div>
        </div> : <h1>No Recipe matches !</h1>}
      </div>
    </div>
  );
};

export default RecipeList;


