import { Task as ITask } from '@/types';

export function Card({ task }: { task: ITask }) {
	const completed = task.subtasks.filter((subtask) => subtask.isCompleted).length;
	const total = task.subtasks.length;
	return (
		<button className='text-left drop-shadow  dark:bg-dark-gray bg-white rounded-lg p-5 cursor-pointer'>
			<h4 className='font-semibold dark:text-white text-md text-black'>{task.title}</h4>
			{task.subtasks.length > 0 && (
				<span className='dark:text-gray-300 text-gray-600 text-sm'>{`${completed} of ${total} subtasks`} substasks</span>
			)}
		</button>
	);
}
