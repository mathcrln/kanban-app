import { Board } from '@/components/Board';
import { getData } from '@/helpers/data';

export default async function Home() {
	const boards = await getData();
	return <Board columns={boards[0]?.columns} />;
}
