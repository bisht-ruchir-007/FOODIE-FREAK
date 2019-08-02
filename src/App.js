import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import Ruchir from './components/Ruchir';

const App = () =>{
  const APP_ID = '22a49a6b';
  const APP_KEY = '05e8bae24ef1e307ae707fe8b306b3e2';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setquery] = useState('');

  useEffect(()=>{
    getRecipes()
  },[query]); 

  const getRecipes = async()=>{
     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
     const data = await response.json();
     setRecipes(data.hits);
     console.log(data);
    };

  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getSearch = e =>{
    e.preventDefault();
    setquery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <p className="heading">THE-FOODIE-FREAK</p>
      <Ruchir/>
      <p className="t2">Browse your food recipe from a collection of trusted comfort food recipes! </p>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="ENTER A DISH eg: Chicken"/>
        <button  className="search-button mx-2">
          <strong>SEARCH</strong>
        </button>
      </form>
      <p className="t1">RESULTS</p>
      <div className="recipes">  
        {recipes.map(recipe =>(
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            dietLabels={recipe.recipe.dietLabels}
            totalWeight={recipe.recipe.totalWeight}
          />
        ))
        }
        <Footer/>
      </div>
    </div>
  )
}


export default App;
