import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import {v4 as uuidv4} from 'uuid';
import './Todo.css'



const Todo =() => {
    const [job,setJob] = useState('');
    const {setJobs} = useContext(AppContext)
    const handleTextChange = (e)=>{
        e.preventDefault()
        setJob(e.target.value);
    }

    const handleSubmit = ()=>{
        
        setJobs(prev =>{
            const newJobs = [...prev,{
                id:uuidv4(),
                title:job
            }];

            //save to local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('job',jsonJobs)


            return newJobs
        })
        setJob('')
    }


  return (
    <div className='job'>
        <input className='input-job' value={job}
            onChange={handleTextChange}/>
        <button className='add-job' onClick={handleSubmit}>
            Add
        </button>
    </div>
  )
}

export default Todo