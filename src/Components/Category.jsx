import React from 'react';
import tw from 'tailwind-styled-components';

const Category = ({categories, filterItems}) => {
	return (
		<div className='flex gap-2'>
			{categories.map((category, index) => (
				<Button key={index} onClick={() => filterItems(category)}>
					{category}
				</Button>
			))}
		</div>
	);
};

const Button = tw.button`
capitalize
bg-yellow-400 
px-2 
py-0.5 
text-gray-800 
rounded 
font-light 
hover:bg-yellow-500/80 
outline-none 
active:scale-105 
transition-transform
`;

export default Category;
