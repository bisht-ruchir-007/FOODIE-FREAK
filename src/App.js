import React, { useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Spinner from './components/images/spinner.gif';

const App = () => {
	// const APP_ID = process.env.REACT_APP_API_ID;
	// const APP_KEY = process.env.REACT_APP_API_KEY;
	const APP_ID = '22a49a6b';
	const APP_KEY = '05e8bae24ef1e307ae707fe8b306b3e2';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	getRecipes();
	// 	// eslint-disable-next-line
	// }, []);

	const getRecipes = async () => {
		setLoading(true);
		const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
		setLoading(false);
		// console.log(data);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		getRecipes();
		setSearch('');
	};

	return (
		<div className='App'>
			<p className='heading'>THE-FOODIE-FREAK</p>
			<Carousel />
			<p className='t2'>Browse your food recipe from a collection of trusted comfort food recipes! </p>
			<form onSubmit={getSearch} className='search-form'>
				<input
					className='search-bar'
					type='text'
					value={search}
					onChange={updateSearch}
					placeholder='ENTER A DISH eg: Chicken'
				/>
				<button className='search-button mx-2'>
					<strong>SEARCH</strong>
				</button>
			</form>
			<p className='t1'>RESULTS</p>
			<div className='recipes'>
				{loading ? <img src={Spinner} alt='Loading...' className='mb-5' /> : <Recipe recipes={recipes} />}
				<Footer />
			</div>
		</div>
	);
};

export default App;
