
export const recipeReducer = (state, action) =>{
switch (action.type) {
    case "SET_RECIPE":
        return [...action.payload]
    case "ADD_RECIPE":
     return [...state, action.payload]
     case "DELETE_RECIPE":
     return action.payload
    default:
       return state
}
}