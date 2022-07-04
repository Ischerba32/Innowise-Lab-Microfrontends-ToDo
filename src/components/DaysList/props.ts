import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Task from '../../interfaces/task.interface';

export default interface IDayListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	activeDay: string;
	setActiveDay: (activeDay: string) => void;
	dataFromDB: Task[] | null;
}
