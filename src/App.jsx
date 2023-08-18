import data from './data';
import Menu from './Components/Menu';

function App() {
	return (
		<div className='flex flex-col justify-center items-center py-6 gap-16'>
			<p className='text-4xl text-yellow-500 font-extrabold'>
				Food
				<span className='text-white text-4xl px-2 bg-gradient-to-tl from-yellow-200 via-yellow-400 to-yellow-600 rounded-lg'>
					Tube
				</span>
			</p>
			<Menu data={data} />
		</div>
	);
}

export default App;
