import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import ITaskForm from "../../interfaces/taskForm.interface";
import TaskForm from "../TaskForm";
import { Modal } from "../UI";
import IModalProps from "../UI/Modal/props";
import { ref, set } from "firebase/database";
import { database } from "../../config/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ active, setActive }: IModalProps) => {
  const { uid } = useContext(AuthContext);

  const createTask = async ({ title, description, date }: ITaskForm) => {
    const taskId = uuidv4();
    const newTaskRef = ref(database, `todo/${uid}/tasks/${taskId}`);
    await set(newTaskRef, {
      title,
      id: taskId,
      description,
      date,
      status: "incomplete",
    });
  };

  return (
    <Modal active={active} setActive={setActive}>
      <TaskForm
        submitHandler={createTask}
        buttonTitle="Create"
        setActiveModal={setActive}
      />
    </Modal>
  );
};

export default CreateTask;
