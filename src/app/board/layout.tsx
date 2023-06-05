import { Header } from '@/components/Header';
import '../globals.css';
import { Sidebar } from '@/components/Sidebar';
import { getData } from '@/helpers/data';

export const metadata = {
	title: 'Kanban App',
	description: 'Kanban App by Frontend Mentor',
};

export default function BoardLayout({ children }: { children: React.ReactNode }) {
	return children;
}
