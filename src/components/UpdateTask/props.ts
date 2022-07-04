import Task from '../../interfaces/task.interface';
import { Dispatch, SetStateAction } from 'react';

export default interface IUpdateTaskProps {
	task: Task;
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
}
