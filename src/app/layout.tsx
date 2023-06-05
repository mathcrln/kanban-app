import { Header } from '@/components/Header';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';
import { getData } from '@/helpers/data';
import { ThemeProvider } from '@/components/theme/context';
import { Toaster } from 'react-hot-toast';
import { DeleteBoardDialog } from '@/components/dialog/dialogs/DeleteBoardDialog';

export const metadata = {
	title: 'Kanban App Next App',
	description: 'Kanban App by Frontend Mentor',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const boards = await getData();
	return (
		<html lang='en'>
			<body className=' border-r-gray-300 '>
				<ThemeProvider>
					<Toaster position='top-right' reverseOrder={false} />
					<Header />
					<div className='h-[calc(100vh-5rem)] grid grid-cols-[max-content,1fr] '>
						<Sidebar boards={boards} />
						<main className='bg-light-gray dark:bg-very-dark-gray overflow-hidden p-5 h-full'>{children}</main>
					</div>
					{/* <DeleteBoardDialog isOpen={true} /> */}
				</ThemeProvider>
			</body>
		</html>
	);
}
