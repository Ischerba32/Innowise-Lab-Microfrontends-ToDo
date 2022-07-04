export default interface Task {
	id: string;
	title: string;
	description: string;
	status: 'incomplete' | 'complete';
	date?: string;
}
