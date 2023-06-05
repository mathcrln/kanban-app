import { useState } from 'react';

export default function useDialog() {
	const [dialog, setDialog] = useState(null);

	const openAddTask = () => {};
	const openTaskInfo = () => {};
	const openEditTask = () => {};
	const openDeleteTask = () => {};
	const openAddBoard = () => {};
	const openEditBoard = () => {};
	const openDeleteBoard = () => {};

	return {
		openAddTask,
	};
}
