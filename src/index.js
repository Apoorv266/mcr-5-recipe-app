import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import RecipeContextWrapper from './Contexts/RecipeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RecipeContextWrapper>
    <App />
    </RecipeContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

