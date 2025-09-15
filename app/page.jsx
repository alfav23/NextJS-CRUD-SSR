import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store"
  });

  return (
    <div className="{styles.main}">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => {
          <>
            <li key={task.id}>{task.title}</li>
          </>
        })}
      </ul>
    </div>
  );
}
