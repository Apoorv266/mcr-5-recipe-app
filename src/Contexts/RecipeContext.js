import React, { createContext, useReducer, useState } from 'react'
import { recipeData } from '../Data/RecipeData'
import { formReducer, initialFormData } from '../Reducers/FormInput'
import { recipeReducer } from '../Reducers/RecipeReducer'

export const recipeContext = createContext()
const RecipeContextWrapper = ({ children }) => {
  const [filterState, setfilterState] = useState({
    text: "",
    radio: "Name"
  })
  const [recipeArr, recipeDispatch] = useReducer(recipeReducer, recipeData)
  const [modal, setmodal] = useState(false)
  const [formState, formDispatch] = useReducer(formReducer, initialFormData)


  const addRecipeFunc = () => {
    const recipeObj = { ...formState, id: Math.floor(Math.random() * 90 + 10), ingredients: formState.ingredients.split(","), instructions: formState.instructions.split(",") }
    recipeDispatch({ type: "ADD_RECIPE", payload: recipeObj })
    setmodal(false)
  }

  const deleteRecipeFunc = (recipeId) => {
    const newArray = recipeArr.filter((item) => item.id !== recipeId)
    recipeDispatch({ type: "DELETE_RECIPE", payload: newArray })
  }


  const editFunc = (currRecipe) =>{
    setmodal(true)
    console.log(currRecipe)
  }



  const filterFunc = () =>{
    const filterArray = filterState.text ? recipeArr.filter((item) => {
      if (filterState.radio === "Name") {
        return item.name.toLowerCase().includes(filterState.text.toLowerCase())
      }
      else if (filterState.radio === "Cuisine") {
        return item.cuisine.toLowerCase().includes(filterState.text.toLowerCase())
      } else if (filterState.radio === "Ingredients") {
        let searchValue = item.ingredients.find((item) => item.toLowerCase().includes(filterState.text.toLowerCase()))
        return searchValue ? true : false
      }
      return null
    }) : recipeArr
    return filterArray
  }
  
  return (
    <recipeContext.Provider value={{ filterState, setfilterState, recipeArr, modal, setmodal, formState, formDispatch, addRecipeFunc, deleteRecipeFunc, filterFunc }}>{children}</recipeContext.Provider>
  )
}

export default RecipeContextWrapper