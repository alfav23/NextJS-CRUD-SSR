import styles from "./page.module.css";
import TaskList from "@/components/TaskList";

export default async function Home() {
  return (
    <div className={styles.main}>
      <h1>Task List</h1>
      <TaskList />
    </div>
  );
}
