import { Column as IColumn } from '@/types';
import { Card } from './Card';
import { Column } from './Column';

export function EmptyBoard() {
	return (
		<div className=' flex h-full bg-red-100 my-auto gap-5 justify-center flex-col items-center'>
			<p>This board is empty. Create a new column to get started.</p>
			<button className='font-semibold bg-main-purple text-white px-4 py-2 rounded-full'>+ Add New Column</button>
		</div>
	);
}
export function Board({ columns }: { columns: IColumn[] }) {
	return (
		<div className='w-full h-full flex  flex-row gap-8 overflow-x-auto '>
			{columns?.map((col) => (
				<Column key={col.name} name={col.name} length={col.tasks.length}>
					{col.tasks.map((task) => (
						<Card task={task} key={task.title} />
					))}
				</Column>
			))}
			<div className='w-80 flex-shrink-0 flex-grow-0 flex items-center justify-center h-full rounded-xl dark:text-white dark:bg-gray-600 bg-gray-200'>
				+ New Column
			</div>
		</div>
	);
}
