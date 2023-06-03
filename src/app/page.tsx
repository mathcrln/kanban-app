import { Board } from '@/components/Board';
import { getData } from '@/helpers/data';

export default async function Home() {
	const boards = await getData();
	return (
		<>
			<Board columns={boards[0]?.columns} />
			{/* <div className='flex flex-row gap-6'>
				<Column>
					{Array.from({ length: 3 }).map((_, i) => (
						<Card
							task={{
								id: '1',
								title: 'Hello World do something',
								description: 'Task 1 description',
								status: 'todo',
								subtasks: [],
							}}
							key={i}
						/>
					))}
				</Column>
				<Column>
					{Array.from({ length: 3 }).map((_, i) => (
						<Card
							task={{
								id: '1',
								title: 'Task 1',
								description: 'Task 1 description',
								status: 'todo',
								subtasks: [],
							}}
							key={i}
						/>
					))}
				</Column>
				<Column>
					{Array.from({ length: 3 }).map((_, i) => (
						<Card
							task={{
								id: '1',
								title: 'Task 1',
								description: 'Task 1 description',
								status: 'todo',
								subtasks: [],
							}}
							key={i}
						/>
					))}
				</Column>
			</div> */}
		</>
	);
}
