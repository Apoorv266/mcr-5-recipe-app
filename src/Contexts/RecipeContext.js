import React, { createContext, useEffect, useReducer, useState } from 'react'
import { recipeData } from '../Data/RecipeData'
import { formReducer, initialFormData } from '../Reducers/FormInput'
import { recipeReducer } from '../Reducers/RecipeReducer'


export const recipeContext = createContext()
const recipeArray = JSON.parse(localStorage.getItem("recipeData"))
const RecipeContextWrapper = ({ children }) => {
  const [filterState, setfilterState] = useState({
    text: "",
    radio: "Name"
  })
  const [modal, setmodal] = useState(false)
  const [editId, seteditId] = useState()
  const [recipeArr, recipeDispatch] = useReducer(recipeReducer, recipeArray)
  const [formState, formDispatch] = useReducer(formReducer, initialFormData)


  const addRecipeFunc = () => {
    const recipeObj = { ...formState, id: Math.floor(Math.random() * 90 + 10), ingredients: formState.ingredients.split(","), instructions: formState.instructions.split(",") }

    const upd_obj = recipeArr.map(obj => {
      if (obj.id === editId) {
        obj.name = formState.name;
        obj.image = formState.image;
        obj.cuisine = formState.cuisine;
        obj.ingredients = formState.ingredients.split(",");
        obj.instructions = formState.instructions.split(",")
      }
      return obj;

    })
    if (editId) {
      recipeDispatch({ type: "DELETE_RECIPE", payload: upd_obj })
    } else {
      recipeDispatch({ type: "ADD_RECIPE", payload: recipeObj })
    }
    setmodal(false)
    seteditId("")
    formDispatch({ type: "empty_input" })
  }

  const deleteRecipeFunc = (recipeId) => {
    const newArray = recipeArr.filter((item) => item.id !== recipeId)
    recipeDispatch({ type: "DELETE_RECIPE", payload: newArray })
  }


  const editFunc = (currRecipe) => {
    setmodal(true)
    const { name, cuisine, image, ingredients
      , instructions, id } = currRecipe
    const obj = {
      name: name,
      image: image,
      instructions: instructions.join(","),
      cuisine: cuisine,
      ingredients: ingredients.join(",")
    }
    seteditId(id)
    formDispatch({ type: "edit_recipe", payload: obj })
  }



  const filterFunc = () => {
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

  useEffect(() => {
    localStorage.setItem("recipeData", JSON.stringify(recipeArr))
  }, [recipeArr])

 useEffect(() => {
  const recipeArray = JSON.parse(localStorage.getItem("recipeData"))
  if (recipeArray) {
    localStorage.setItem("recipeData", JSON.stringify(recipeArr))
  }else{
    localStorage.setItem("recipeData", JSON.stringify(recipeData))
  }
 }, [])
 

  return (
    <recipeContext.Provider value={{ filterState, setfilterState, recipeArr, modal, setmodal, formState, formDispatch, addRecipeFunc, deleteRecipeFunc, filterFunc, editFunc }}>{children}</recipeContext.Provider>
  )
}

export default RecipeContextWrapper