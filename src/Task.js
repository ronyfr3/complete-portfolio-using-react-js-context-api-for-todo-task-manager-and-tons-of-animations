import React,{useContext} from 'react'
import { TaskListContext } from './Context'
import './Task.css'

function Task({task}) {
    //after typing on input then clicking add task this log results come
    // console.log(task)
    // {title: "hello", id: "49cfc740-c888-48bf-86e6-b3c6dfe70313"}
    // console.log(task.id)
    //console.log(task.id)-->835d64c1-6e56-46c7-bef3-4e4891f4155e
    const {deleteTask,findItem} =useContext(TaskListContext)
    return (
        <div>
            <div className='tasks'>
            <div className='taskText'>
                {/* task.title = ja type korbo input e oitai */}
               <span className='tasks-list'>{task.title}</span>
            </div>
            {/* task.id er task ta as props esece todo component theke */}
        <span onClick={()=>deleteTask(task.id)} className='tasks-list1'>Delete</span>
        <span onClick={()=>findItem(task.id)} className='tasks-list1'>Edit</span>
   </div>  
        </div>
    )
}

export default Task
