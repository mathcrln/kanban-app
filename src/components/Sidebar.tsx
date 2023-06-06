'use client';
import Link from 'next/link';
import { BoardIcon } from './icons/BoardIcon';
import { Board } from '@/types';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from './theme/ThemeSwitcher';
import { HideIcon } from './icons/HideIcon';

export function Sidebar({ boards }: { boards: Board[] }) {
	const data = usePathname();
	console.log('pathname', data);

	{
		/* <Link href='/' className=' gap-3 items-center text-medium-gray  flex pl-6 py-3'>
						<BoardIcon /> Platform Launch
					</Link> */
	}

	{
		/* <Link
							key={board.name}
							href='/'
							className='bg-main-purple gap-3 items-center text-white rounded-r-full flex pl-6 py-3'
						>
							<BoardIcon /> <span>{board.name}</span>
						</Link> */
	}
	return (
		<aside className='hidden md:block dark:bg-dark-gray drop-shadow bg-white border-r w-60 dark:border-gray-700 border-gray-300 py-2 flex flex-col justify-between'>
			<div>
				<h3 className='text-medium-gray pl-6 py-3 uppercase text-sm'>All Boards (3)</h3>

				<nav className='flex flex-col'>
					{boards.map((board) => (
						<Link key={board.name} href='/' className=' gap-3 items-center text-medium-gray  flex pl-6 py-3'>
							<BoardIcon /> <span>{board.name}</span>
						</Link>
					))}
				</nav>
				<button className=' pl-6 py-3 font-semibold text-main-purple flex items-center gap-2'>
					<BoardIcon /> + Create New Board
				</button>
			</div>
			<div className='flex flex-col gap-4 mx-4 my-8'>
				<ThemeSwitcher />
				<button className='flex dark:text-white items-center justify-left gap-2'>
					<HideIcon /> Hide Sidebar
				</button>
			</div>
		</aside>
	);
}
