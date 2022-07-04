import ToDoItem from '../ToDoItem';
import IToDoListProps from './props';
import styles from './styles.module.scss';

const ToDoList = ({ tasks, tasksDate }: IToDoListProps) => {
	return (
		<div className={styles.toDoList}>
			{tasks &&
				tasks.map((task) => (
					<ToDoItem task={task} taskDate={tasksDate} key={task.id} />
				))}
		</div>
	);
};

export default ToDoList;
