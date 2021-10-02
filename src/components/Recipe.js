import React from 'react';
import RecipeItem from './RecipeItem';

const Recipe = ({ recipes }) => {
	return (
		<div className='row mx-0'>
			{recipes.map((recipe) => {
				const foodItem = recipe.recipe;
				// console.log(foodItem);
				return <RecipeItem key={foodItem.label} recipe={foodItem} />;
			})}
		</div>
	);
};

export default Recipe;
