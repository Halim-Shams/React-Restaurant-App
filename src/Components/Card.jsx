import React from 'react';
import tw from 'tailwind-styled-components';

const Card = () => {
	return (
		<div className='group/card hover:shadow-md transition-shadow bg-gray-100/70 rounded-md flex flex-col gap-2 relative'>
			<New>NEW</New>
			<div className='overflow-hidden w-full h-40 rounded-t-md'>
				<img
					className='group-hover/card:scale-105 transition object-cover'
					src='https://media.istockphoto.com/id/115608454/photo/different-sorts-of-tea.jpg?s=612x612&w=0&k=20&c=8rerrqGYo42P3st0y6LjF14-lrqZD2eifKEKua6IECc='
					alt='image'
				/>
			</div>
			<div className='flex flex-col gap-1.5 px-3 pb-3'>
				<div className='flex justify-between'>
					<p className='font-bold text-gray-700 capitalize'>Eggs Benedict</p>
					<p className='font-medium text-lg font-serif text-yellow-500'>
						$1.99
					</p>
				</div>
				<p className='text-gray-600'>
					Classic breakfast dish with poached eggs, ham, and hollandaise sauce
					on an English muffin.
				</p>
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
