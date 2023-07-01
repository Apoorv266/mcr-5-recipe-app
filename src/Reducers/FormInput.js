export const initialFormData = {
    name: "",
    image: "",
    instructions: "",
    cuisine: "",
    ingredients: ""
}


export const formReducer = (state, action) => {
    switch (action.type) {
        case "name":
            return { ...state, name: action.payload }
        case "image":
            return { ...state, image: action.payload }
        case "instructions":
            return { ...state, instructions: action.payload }
        case "cuisine":
            return { ...state, cuisine: action.payload }
        case "ingredients":
            return { ...state, ingredients: action.payload }
            case "edit_recipe":
                return action.payload
                case "empty_input":
                return initialFormData
        default:
            return state
    }
}

