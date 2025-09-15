export default function Tasks() {
    const tasks = [];

    const addTask = () => {
        tasks.forEach(task => {
            <div>
                <h3>Task ${task.id}</h3>
                <p>${task.value}</p>
            </div>
            }
        )};    
    
    return (
        <form>
            <input placeholder="Type a new task" type="text" value={tasks.task}/>
            <button type="button" onClick={addTask}>Add</button>
        </form>
    )
        
        console.log(tasks);
}