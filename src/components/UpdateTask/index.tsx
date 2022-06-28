import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import TaskForm from "../TaskForm";
import { Modal } from "../UI";
import { ref, update } from "firebase/database";
import { database } from "../../config/firebaseConfig";
import ITaskForm from "../../interfaces/taskForm.interface";
import IUpdateTaskProps from "./props";

const UpdateTask = ({ task, active, setActive }: IUpdateTaskProps) => {
  const { uid } = useContext(AuthContext);

  const editTask = ({ title, description, date }: ITaskForm) => {
    update(ref(database, `todo/${uid}/tasks/${task.id}`), {
      title,
      description,
      date,
    });
  };
  return (
    <Modal active={active} setActive={setActive}>
      <TaskForm
        submitHandler={editTask}
        buttonTitle="Update"
        setActiveModal={setActive}
        title={task.title}
        description={task.description}
        date={task.date}
      />
    </Modal>
  );
};

export default UpdateTask;
