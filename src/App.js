import { Route, Routes } from 'react-router-dom';
import './App.css';
import RecipeList from './Components/RecipeList';
import SingleRecipe from './Components/SingleRecipe';
import RecipeModal from './Components/RecipeModal';
import { useContext } from 'react';
import { recipeContext } from './Contexts/RecipeContext';

function App() {
  const { modal } = useContext(recipeContext)
  return (
    <div className="App">
     {modal && <RecipeModal />}
      <Routes>
        <Route path='/' element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<SingleRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
