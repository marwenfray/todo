import React from 'react'
import Task from './task'

export default function todo({task, edit, rem }) {
    return (
        <table className="table table-striped table-dark">
            <thead>
            <tr>
                <th  scope="col">#</th>
                <th  scope="col">Task</th>
                <th  scope="col">Edit</th>
                <th  scope="col">Delete</th>
            </tr>
            </thead>
            <Task key={task.id} task={task} edit={edit} rem={rem} />
        </table>
    )
}
