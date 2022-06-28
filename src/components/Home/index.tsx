import Calendar from "../Calendar";
import { Header } from "../Header";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.toDo}>
      <Header />
      <Calendar />
    </div>
  );
};

export default Home;
