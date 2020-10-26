import React, { useContext,useState,useEffect } from 'react'
import { TaskListContext } from './Context'
import Task from './Task'
import './ToDo.css'

function Context() { 
    // onSubmit new array will add to tasks array to the context component
    const {addTask,tasks,clearTask,editTask,editItem} = useContext(TaskListContext)
    // console.log(tasks)
    //empty array -> [] coz no array items in useState in context component
    const [title,setTitle] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
       
        // edit section
        //editItem ===null mane edit korar jonno kisui nai task e ak kotha no task in array
        //tokhn addtask(title )mane new task add korte hbe then title ta pathate hbe task array te
        if(editItem===null){
        //  addTask get the input field text from value={title} then send it to context component to tasks array
        // uuid auto generate id no need for id
        addTask(title)
        // console.log(tasks)  
        //joto gula task e array thakbe sob show korbe console e nicher gula
        // 0: {title: "jony", id: "7887e87c-cbc2-42af-8bac-a7a4325394e8"}
        // 1: {title: "joly", id: "6fed4f1d-d7ff-4a9e-8cf5-7860d1f3ea2a"}
        // 2: {title: "non", id: "175c5e06-1413-4ad5-83c4-d717126713f3"}
        // 3: {title: "bool", id: "3a9b04b1-d404-477a-ac11-71bd082996f9"}
        // length: 4

        //when we type in input our typing text show after submit to add task button we need to clear the input after click to add task button so setTitle('')empty array used
        //setTitle('') mane input field e new array add korar por faka hoye jbe kono lekha thakbena input field e
        setTitle('')
        }else{
            //jodi kono task thake taile sei task er title r id pass hobe editTask er props hoye context.js e
            editTask(title,editItem.id)
        }
    }
        // edit section
        useEffect(()=>{
            if(editItem!==null){
                setTitle(editItem.title)
                // console.log(editItem)
            }else{
                setTitle('')
            }
        },[editItem])

    const handleChange = (e)=>{
        //setTitle set input typing value to the title variable ->useState('') then 
        //then the value take the input field then send it to the addTask unction as props which add new array to tasks
        setTitle(e.target.value)
        console.log(title)//ami rony type korlm input e thn uuid:id r title e amr name aslo
        //  {title: "rony", id: "68a5cbcc-958d-41f5-9009-7e56a10346df"}
        //  id: "68a5cbcc-958d-41f5-9009-7e56a10346df"
        //  title: "rony"
    }
 

    return (
        <form onSubmit={handleSubmit} className='todo'>
            <h2 className='todo-h2'>Task Manager</h2>
            <div className='todo-input'>
                <input 
                type='text'
                placeholder='Add Task..'
                value={title}
                onChange={handleChange}
                required
                />
            </div>
            <div className='taskBtn'>
                <button>
                    {editItem ? 'Edit Task': 'Add Task'}
                </button>
                {/* clearTask setTasks empty kore disse */}
                <button onClick={clearTask}>Clear</button>
            </div>
            
           <div className='tasklistss'>
               {/* tasks empty na hle amra title pabo return hisebe ey div e 
               tasks.id rendom generate korbe id uuid dara
               */}
           {
                tasks.length ? (
                   <div>
                        {
                        tasks.map(task=>{
                            return <Task task={task} key={task.id}/>
                        })
                     }
                   </div>
                ):(
                    <h2 className='noTask'>No Tasks To Do</h2>
                )
            }
           </div>
        </form>
    )
}

export default Context
