import React from 'react'
import { FaTrash } from 'react-icons/fa'


const Task = ({ task, deleteTask, toggleReminder }) => {

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
            <h3>
                {task.text}
                <FaTrash
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteTask(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
