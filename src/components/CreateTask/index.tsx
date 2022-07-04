import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AuthContext } from '../../context/auth.context';
import { database } from '../../config/firebaseConfig';
import IModalProps from '../UI/Modal/props';
import TaskFormParams from '../../interfaces/taskForm.interface';
import { Modal } from '../UI';
import { ref, set } from 'firebase/database';
import TaskForm from '../TaskForm';

const CreateTask = ({ active, setActive }: IModalProps) => {
	const { uid } = useContext(AuthContext);

	const createTask = async ({ title, description, date }: TaskFormParams) => {
		const taskId = uuidv4();
		const newTaskRef = ref(database, `todo/${uid}/tasks/${taskId}`);
		await set(newTaskRef, {
			title,
			id: taskId,
			description,
			date,
			status: 'incomplete',
		});
	};

	return (
		<Modal active={active} setActive={setActive}>
			<TaskForm
				submitHandler={createTask}
				buttonTitle='Create'
				setActiveModal={setActive}
			/>
		</Modal>
	);
};

export default CreateTask;
