import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store"
  });

  const data = await response.json();
  // If the API returns { tasks: [...] }, use data.tasks; otherwise, use data
  const tasks = Array.isArray(data) ? data : data.tasks;

  console.log(tasks);

  return (
    <div className={styles.main}>
      <h1>Task List</h1>
      <ul>
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))
        ) : (
          <li>No tasks found.</li>
        )}
      </ul>
    </div>
  );
}
