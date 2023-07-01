import React, { useContext } from "react";
import "../Styles/Modal.css";
import { recipeContext } from "../Contexts/RecipeContext";

const RecipeModal = () => {
  const { setmodal ,formState , formDispatch, addRecipeFunc} = useContext(recipeContext);

  const closeFunc = () =>{
    formDispatch({ type: "empty_input" })
    setmodal(false)
  }
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeFunc}>
            X
          </span>
          <div>
          <p>Recipe Name</p>
          <input type="text" className="modal-input" value={formState.name} onChange={(e)=>formDispatch({type : "name", payload : e.target.value})}/>
          <p>Add Image</p>
          <input type="text" className="modal-input" placeholder="Add image URL" value={formState.image} onChange={(e)=>formDispatch({type : "image", payload : e.target.value})}/>
          <p>Cuisine Name</p>
          <input type="text" className="modal-input" value={formState.cuisine}  onChange={(e)=>formDispatch({type : "cuisine", payload : e.target.value})}/>
          <p>Ingridents List (seperate by commas)</p>
          <textarea value={formState.ingredients}  onChange={(e)=>formDispatch({type : "ingredients", payload : e.target.value})}/>
          <p>Instructions (seperate by commas)</p>
          <textarea value={formState.instructions}   onChange={(e)=>formDispatch({type : "instructions", payload : e.target.value})}/>
          </div>
          <button onClick={addRecipeFunc}>Add recipe !</button>
        </div>
      </div>
    </>
  );
};

export default RecipeModal;
