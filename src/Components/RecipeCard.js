import React, { useContext } from "react";
import "../Styles/RecipeCard.css"
import { Link } from "react-router-dom";
import { recipeContext } from "../Contexts/RecipeContext";

const RecipeCard = ({item}) => {
  const {deleteRecipeFunc} = useContext(recipeContext)
  return (
    <div className="recipe-card">
      <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="" srcset="" width={"20px"} onClick={()=>deleteRecipeFunc(item.id)}/>
      <img
        src={item.image}
        alt=""
        srcset=""
        width={"300px"}
        height={"300px"}
        style={{ objectFit: "cover" }}
      />
      <h1>{item.name}</h1>
      <div className="recipe-detail">
        <p>
          <strong>Cuisine type : </strong>
        </p>
        <p>{item.cuisine}</p>
      </div>
      <div className="recipe-detail">
        <p>
          <strong>Ingredients : </strong>
        </p>
        <Link to={`/recipe/${item.id}`}>
        <p>See Recipe {">"}</p>
        </Link>
      </div>
      <div className="recipe-detail">
        <p>
          <strong>Instructions : </strong>
        </p>
        <Link to={`/recipe/${item.id}`}>
        <p>See Recipe {">"}</p>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
