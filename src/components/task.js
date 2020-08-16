import React from 'react'
import EditTask from './editTask'

export default function task({task, edit, rem}) {
    return (
        <tbody>
            {task.map((el)=>
            <tr>
                <th scope="row">{el.id+1}</th>
                <td>{el.text}</td>
                <td><EditTask id={task.id} edit={edit} oldText={task.text} /></td>
                <td><button  onClick={() => rem(task.id)}>
        Delete
      </button></td>
            </tr>)}
        </tbody>
    )
}
