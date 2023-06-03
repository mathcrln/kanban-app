import { Header } from '@/components/Header';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';
import { getData } from '@/helpers/data';

export const metadata = {
	title: 'Kanban App Next App',
	description: 'Kanban App by Frontend Mentor',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const boards = await getData();

	return (
		<html lang='en' className='dark'>
			<body className=' border-r-gray-300 '>
				<Header />
				<div className='h-[calc(100vh-4rem)] grid grid-cols-[max-content,1fr] '>
					<Sidebar boards={boards} />
					<main className='bg-light-gray dark:bg-very-dark-gray overflow-hidden p-5 h-full'>{children}</main>
				</div>
			</body>
		</html>
	);
}
