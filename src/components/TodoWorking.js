import { useState } from "react";
import './toDoList.css';

export default function Working() {
    const [task,setTask]=useState()
    const [taskList, setTaskList] = useState([]);
    const [completeTask, setCompleteTask] = useState([]);
    const [priority, SetPriority] = useState([]);
    const addTask=(evt)=>{
        setTask(evt.target.value)
    }
    console.log(taskList[0])
    const createTask = () => {
        if(taskList.includes(task) || priority.includes(task) ){
            alert("already addes")
        }else if(task.trim()==='' || task===undefined || task===null){
            alert("enter valid")
        }else{
            setTaskList((prevList) => [...prevList, task]);
            setTask(""); // Clear input after adding
        }
        console.log(taskList)
    };
    const createTaskPriority = () => {
        if(taskList.includes(task) || priority.includes(task) ){
            alert("already addes")
        }else if(task.trim()==='' || task===undefined || task===null){
            alert("enter valid")
        }else{
            SetPriority((prevList) => [...prevList, task]);
            setTask(""); // Clear input after adding
        }
        console.log(taskList)
    };
    const completeTaskAdd = (val) => {
        if(priority.includes(val)){
            SetPriority(priority.filter((item)=>
                val!==item))
        }else{
            setTaskList(taskList.filter((item)=>
                val!==item))
        }
        setCompleteTask((prevList)=>[...prevList,val]);
    };
    const reCompleteTask = (val) => {
        setTaskList(prevList=>[...prevList,val])
        setCompleteTask(completeTask.filter((item)=>
            val!==item))
    };
    const deleteAll = () => {
        setCompleteTask([])
        setTaskList([])
    };
    const deleteAllCompleted = () => {
        setCompleteTask([])
    };
    const changeEl=(val)=>{
            if(val==='priority'){
                createTaskPriority(val)
            }else if(val==='task'){
                createTask(val);
            }
            setCompleteTask(completeTask.filter((item)=>
                val!==item));
    };
    return (
        <>
            <input type="text" value={task} onChange={addTask}/> 
            <button class="btnCreate" onClick={createTask}>Normal Task</button>
            <button class="btnCreate" onClick={createTaskPriority}>Priority Task</button><br />
            <ul>
                {priority.map((t) => (
                    <li>
                        <mark>{t}</mark>
                        <input type="checkbox" onClick={() => completeTaskAdd(t)}/></li>
                        
                ))}
            </ul>
            <ul>
                {taskList.map((t) => (
                    <li>
                        {t}
                        <input type="checkbox" onClick={() => completeTaskAdd(t)}/></li>
                ))}
            </ul>
            
            <h3><b>Completed</b></h3>
            <ul>
                {completeTask.map((ct)=>(
                    <li><del>{ct} <input type="checkbox" onClick={() => reCompleteTask(ct)}/></del>
                    <lable>:</lable>
                    <select onChange={changeEl(this)}>
                        <option value='del'>delete</option>
                        <option value='priority'>add to priority</option>
                        <option val='task'>add to task</option>
                    </select>
                    </li>
                ))}
            </ul>
            <button class="buttonDelete" onClick={deleteAllCompleted}>Delete Completed Task</button><br/>
            <button className="buttonDeleteAll" onClick={deleteAll}>Delete All Task</button>

        </>
    )
}