'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './create.module.css';


const CreateTask = () => {
    const [ title, setTitle ] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title) return;

        const response = await fetch("/api/tasks", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        })

        if (response.ok) {
            // print success message 
            alert(
                `Added "${title}" to Tasks List.`
            )
            // reload window to reset create task input box
            // window.location.reload();
            // push new task to home page
            router.push('/')
            
        } else {
            alert('Failed to create task :(')
        }
        console.log (title);
    };

    return (
        <div>
            <h1 className={styles.heading}>Create Task</h1>
            <form className={styles.form} action="submit" onSubmit={handleSubmit}>
                <input className={styles.input} type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Enter new task.'/>
                <button className={styles.button} type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateTask;