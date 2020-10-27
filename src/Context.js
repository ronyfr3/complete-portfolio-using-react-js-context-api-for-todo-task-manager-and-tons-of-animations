import React,{createContext,useState,useEffect} from 'react'
import uuid from 'uuid'
export const TaskListContext = createContext()

function Context(props) {

    //localStorage
    //getitem(task )task ta holo setitem(task) name same hte hbe
    //empty object || [] mane jodi kono array na thake tasks e taile amk empty object firot dibe 
    //initialstate e store korci j data passi setItem theke as object
    //amra jkono name dite pari jmn ekhne 'tasks' name dyeci but setIte r getItem er name same hte hbe
    //JSON.parse object create kore array k thn directly use korte object ta k application e
    const initialstate = JSON.parse(localStorage.getItem('tasks')) || []
    
    //ey line age lekha jbe na coz initialstate age define na korle error dekhabe
    //useState(initialstate) ekhne initialstate ki korce jodi tasks e array object thake taile firot dibe oi array obj noito empty object firot dibe
    const [tasks,setTasks] = useState(initialstate)
    //tasks age define kore thn use korte hoi
    //useEffect er kaj holo new array add krar por akbar run hbe
    useEffect(()=>{
        //JSON.stringify(tasks) ekhne tasks ta holo useState er tasks variable jetake json string e convert korci
        //setItem('tasks') ekhne tasks holo name eta jkono name dite pari
        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])




//    update the state or to add a new array to the current array we have to use spread opartor
    const addTask = (title) => {
        setTasks([...tasks,{title:title,id:uuid()}])
    }
// id ta jeta asbe task.js component theke seta random id jeta uuid provide korce
   const deleteTask = (id) =>{
       //filter (helper method)remove korce task jeta create korci new ta  ekhane id =random id r task.id ta jodi task array te kono task thakto tar actual id(context er task,setTask e) not uuid 
      //kono idr sathe kono id er mill thakben onno task er id er sathe ey condition dara
       setTasks(tasks.filter(task=>task.id!==id))
    //    console.log(task.id) -->random id
   }
//when we click on clear button then we get a empty task field
    const clearTask =()=>{
        // we should use [] not '' coz this is array
        setTasks([])
    }

    // edit section

    //store korci edit kora jbe emn item gula editItem e
    const [editItem,setEditItem] =useState(null)

    //id gula find kore editItem k update korte ey findItem function likheci
    //id ta astece click korar pore jeta astece task.js componenet theke
    // <span onClick={()=>findItem(task.id)} className='tasks-list1'>Edit</span>
    const findItem = id =>{
        const item = tasks.find(task=>task.id===id)
        // console.log(item)//id: "09b33fb1-c8dd-49ba-b2b5-764a3fbba461" title: "var"
        setEditItem(item)
    }
    const editTask =(title,id)=>{
        //task.id holo jeta te click korci edit korte r  id holo actual id jeta same,edit korar por tai title id firot disse oi same id title array te
        const newTasks =tasks.map(task=>(task.id===id ? {title,id} : task))
        
        console.log(title) //jony
        console.log(id) //7887e87c-cbc2-42af-8bac-a7a4325394e8   nicher jony title r id same
        //newTasks sob array dekhasse jeta holo mot task joto gula task array te ase todo.js e console.log(task) same output dibe
        console.log(newTasks)
           // 0: {title: "jony", id: "7887e87c-cbc2-42af-8bac-a7a4325394e8"}
           // 1: {title: "joly", id: "6fed4f1d-d7ff-4a9e-8cf5-7860d1f3ea2a"}
           // 2: {title: "non", id: "175c5e06-1413-4ad5-83c4-d717126713f3"}
           // 3: {title: "bool", id: "3a9b04b1-d404-477a-ac11-71bd082996f9"}
           // 4: {title: "kan", id: "83952369-9623-4d86-b4ec-d8038e7fae75"}
           // 5: {title: "lol", id: "6121b999-28e3-4300-a9ad-613a91c8060d"}
           // length: 6
           // __proto__: Array(0)
        setTasks(newTasks)
        setEditItem(null)
    }
    // userForms
    const initValue =JSON.parse(localStorage.getItem('user')) || []
    const [user ,setUser] =useState(initValue)
    useEffect(()=>{
         localStorage.setItem('user',JSON.stringify(user))
    },[user])
    const addUser = (title) => {
        setUser(title)
    }

    return (
    <TaskListContext.Provider value={{
        tasks,
        user,
        addUser,
        setUser,
        setTasks,
        editItem,
        findItem,
        editTask,
        clearTask,
        deleteTask,
        addTask
        }}>
        {props.children}
    </TaskListContext.Provider>
    )
}

export default Context
