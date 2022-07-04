import { memo, useContext, useEffect, useState } from 'react';
import moment from 'moment';

import { AuthContext } from '../../context/auth.context';
import { database } from '../../config/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import Task from '../../interfaces/task.interface';

import styles from './styles.module.scss';

import { Card, Htag, Button, Loader } from '../UI';
import CreateTask from '../CreateTask';
import DaysList from '../DaysList';
import ToDoList from '../ToDo/ToDoList';

const Calendar = memo((): JSX.Element => {
	const [activeDay, setActiveDay] = useState<string>(
		moment().format('YYYY-MM-DD')
	);
	const [modalOpened, setModalOpened] = useState<boolean>(false);

	const [dataFromDB, setDataFromDB] = useState<Task[] | null>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const { uid, email } = useContext(AuthContext);

	const fetchData = async (uid: string) => {
		setLoading(true);
		uid &&
			(await onValue(ref(database, `todo/${uid}/tasks`), (snapshot) => {
				if (snapshot.val()) {
					setDataFromDB(Object.values(snapshot.val()));
				} else setDataFromDB([]);
				setLoading(false);
			}));
	};

	useEffect(() => {
		fetchData(uid);
	}, [uid, email]);

	const dayTasks = dataFromDB?.filter((task) => task.date === activeDay);

	if (loading) {
		return <Loader speed={2} />;
	}

	return (
		<>
			<DaysList
				className={styles.calendar}
				activeDay={activeDay}
				setActiveDay={setActiveDay}
				dataFromDB={dataFromDB}
			/>
			<Card color='white' className={styles.toDo}>
				<Htag tag='h2'>Tasks Today: {dayTasks ? dayTasks.length : 0}</Htag>
				{dayTasks && <ToDoList tasks={dayTasks} tasksDate={activeDay} />}
				<Button
					appearance='primary'
					className={styles.toDo__addTaskBtn}
					onClick={() => setModalOpened(true)}
				>
					+ Add a new Task
				</Button>
			</Card>
			<CreateTask active={modalOpened} setActive={setModalOpened} />
		</>
	);
});

export default Calendar;
