import { Logo } from './Logo';
import { ThreeDots } from './icons/ThreeDotsIcon';

export function Header() {
	return (
		<header className='dark:bg-dark-gray dark:text-white drop-shadow bg-white flex h-20'>
			<h1 className='drop-shadow w-60 flex-shrink-0 flex-grow-0 p-8 border-r  border-gray-300'>
				<Logo />
			</h1>
			<div className='flex flex-grow justify-between items-center'>
				<h2 className='px-8 font-semibold text-xl'>Platform Launch</h2>
				<div className='flex gap-5 items-center px-5'>
					<button className='font-semibold bg-main-purple text-white px-4 py-2 rounded-full'>+ Add New Task</button>
					<ThreeDots />
				</div>
			</div>
		</header>
	);
}
