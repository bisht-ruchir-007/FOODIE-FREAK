import React from 'react';

const Recipe = ({ title, calories, image, ingredients, dietLabels, totalWeight }) => {
	return (
		<div className='recipeitem'>
			<div className='ingr'>
				<u>
					<h1 className='dishname'>{title}</h1>
				</u>
				<img src={image} className='figure-img img-fluid rounded img-thumbnail' alt='...' />

				<p className='t1'>Ingredients : </p>
				{ingredients.map((ingredient) => (
					<p className='t2'>{ingredient.text}</p>
				))}

				<p className='t1'>
					Calories : <h4>{calories}</h4>
				</p>
				<p className='t1'>
					Diet Label :<h4>{dietLabels[0]}</h4>
				</p>
				<p className='t1'>
					Total Wieght :<h4>{totalWeight} gms</h4>
				</p>
			</div>
		</div>
	);
};

export default Recipe;
