import React from 'react';
import Card from './Card';

const Menu = ({data}) => {
	console.log(data);
	return (
		<div className='grid grid-cols-3 gap-10 w-9/12'>
			{data.map((item) => (
				<Card
					image={item.image}
					name={item.name}
					price={item.price}
					detail={item.detail}
					category={item.category}
					isNew={item.isNew}
				/>
			))}
		</div>
	);
};

export default Menu;
