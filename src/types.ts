export type Board = {
	name: string;
	columns: Column[];
};

export type Column = {
	name: string;
	tasks: Task[];
};

export type Task = {
	title: string;
	description: string;
	column: string;
	subtasks: Subtask[];
};

export type Subtask = {
	title: string;
	isCompleted: boolean;
};
