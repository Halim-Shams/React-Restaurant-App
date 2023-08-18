import React, {useState} from 'react';
import {motion} from 'framer-motion';
import Card from './Card';
import Category from './Category';

const Menu = ({data}) => {
	const [items, setItems] = useState(data);
	console.log(items);

	const filterItems = (ctg) => {
		if (ctg === 'all') {
			setItems(data);
		} else {
			setItems(data.filter((item) => item.category === ctg));
		}
	};

	const allCategories = ['all', ...new Set(data.map((item) => item.category))];
	return (
		<>
			<Category categories={allCategories} filterItems={filterItems} />
			<div layout className='grid grid-cols-3 gap-10 w-9/12'>
				{items.map((item, index) => (
					<Card
						key={index}
						image={item.image}
						name={item.name}
						price={item.price}
						detail={item.detail}
						category={item.category}
						isNew={item.isNew}
					/>
				))}
			</div>
		</>
	);
};

export default Menu;
