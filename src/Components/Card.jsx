import React from 'react';
import tw from 'tailwind-styled-components';

const Card = ({image, name, detail, price, category, isNew}) => {
	return (
		<div className='group/card hover:shadow-md transition-shadow bg-gray-100/70 rounded-md flex flex-col gap-2 relative'>
			{isNew && <New>NEW</New>}
			<div className='overflow-hidden w-full h-48 rounded-t-md'>
				<img
					className='group-hover/card:scale-105 transition object-cover'
					src={image}
					alt={name}
				/>
			</div>
			<div className='flex flex-col gap-1.5 px-3 pb-3'>
				<div className='flex justify-between'>
					<p className='font-bold text-lg text-gray-700 capitalize'>{name}</p>
					<p className='font-medium text-lg font-serif text-yellow-500'>
						${price}
					</p>
				</div>
				<p className='text-gray-600'>{detail}</p>
			</div>
		</div>
	);
};

const New = tw.div`
z-10 
flex 
items-center 
justify-center 
w-11 
h-11 
text-white 
text-sm 
absolute 
bg-gradient-to-tl 
from-yellow-200 
via-yellow-400 
to-yellow-600
rounded-full
font-medium
-top-5
-right-5
`;

export default Card;
