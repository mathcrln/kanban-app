import { Board as IBoard } from '@/types';

export async function getData(): Promise<IBoard[]> {
	const res = await fetch('http://localhost:3000/data.json');
	const data = await res.json();
	const boards = data?.boards;
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return boards;
}
