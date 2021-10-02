import React from 'react';

const RecipeItem = ({ recipe }) => {
	return (
		<div className='col-4 mb-4'>
			<div className='card'>
				<img src={recipe.image} className='card-img-top' alt={recipe.label} />
				<div className='card-body'>
					<h5 className='card-title mb-0'>{recipe.label}</h5>
					<span className='badge bg-danger mb-3'>{recipe.dishType[0]}</span>
				</div>
				<ul className='list-group list-group-flush'>
					{recipe.ingredients.length > 5 ? (
						<>
							<li className='list-group-item' style={{ backgroundColor: '#008B8B' }}>
								{recipe.ingredients[0].text}
							</li>
							<li className='list-group-item' style={{ backgroundColor: '#008B8B' }}>
								{recipe.ingredients[1].text}
							</li>
							<li className='list-group-item' style={{ backgroundColor: '#008B8B' }}>
								{recipe.ingredients[2].text}
							</li>
							<li className='list-group-item' style={{ backgroundColor: '#008B8B' }}>
								{recipe.ingredients[3].text}
							</li>
							<li className='list-group-item' style={{ backgroundColor: '#008B8B' }}>
								{recipe.ingredients[4].text}
							</li>
						</>
					) : (
						recipe.ingredients.map((ingredient) => {
							return (
								<li
									key={`${recipe.label}+${ingredient.foodId}`}
									className='list-group-item'
									style={{ backgroundColor: '#008B8B' }}
								>
									{ingredient.text}
								</li>
							);
						})
					)}
				</ul>
				<div className='card-body'>
					<a href={recipe.url} className='card-link btn btn-dark'>
						More Info
					</a>
				</div>
			</div>
		</div>
	);
};

export default RecipeItem;
