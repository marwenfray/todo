import React from 'react'
import EditTask from './editTask'

export default function task({task, edit, rem}) {
    return (
        <tbody>
            {task.map((el)=>
            <tr>
                <th scope="row">{el.id+1}</th>
                <td>{el.text}</td>
                <td><EditTask id={el.id} edit={edit} oldText={el.text} /></td>
                <td><button  onClick={() => rem(el.id)}>
        Delete
      </button></td>
            </tr>)}
        </tbody>
    )
}
