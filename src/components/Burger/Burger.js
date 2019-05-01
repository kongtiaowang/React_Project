import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
	console.log(props.ingredients);
	let ingredientslist = Object.keys(props.ingredients)
		.map( (igKey) => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return (<BurgerIngredient type={igKey} key={igKey + i} />);
			});
		}).reduce((arr,el) => { return arr.concat(el)},[]
		);
	console.log(ingredientslist);
	if (ingredientslist.length === 0) {
		ingredientslist = <p>Please start adding ingredients!</p>;
		//console.log(ingredientslist);
	}
 	return (
		<div className={classes.Burger}>
   			<BurgerIngredient type="bread-top" />
            {ingredientslist}
   			<BurgerIngredient type="bread-bottom" />
		</div>
	);
}

export default Burger;