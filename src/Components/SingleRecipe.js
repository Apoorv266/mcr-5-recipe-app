import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "../Styles/SingleRecipe.css";
import { recipeContext } from "../Contexts/RecipeContext";

const SingleRecipe = () => {
  const { recipeId } = useParams();
  const { recipeArr } = useContext(recipeContext);

  const recipeObj = recipeArr.find((item) => item.id === Number(recipeId));
  return (
    <>
      <h1>{recipeObj.name}</h1>
      <div className="single-recipe-main">
        <div className="recipe-img">
          <img
            src={recipeObj.image}
            alt=""
            srcset=""
            width={"600px"}
            height={"500px"}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="recipe-details">
          <h1>
            <strong>Cuisine : {recipeObj.cuisine}</strong>
          </h1>

          <p>
            <strong>Ingredients : </strong>
            {recipeObj.ingredients}
          </p>
          <h1>Instructions</h1>
          <ol>
            {recipeObj.instructions.map((item ) => <li>{item}</li>)}
          </ol>
        </div>
      </div>
    </>
  );
};

export default SingleRecipe;
