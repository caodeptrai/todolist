import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark } from '@fortawesome/free-solid-svg-icons';
import './ListJobs.css'
import ListJobItem from './ListJobItem';
const ListJobs = props => {
    const {jobs,setJobs} = useContext(AppContext)

    const [dragStartIndex, setdragStartIndex] = useState(null);

    const handleDeleteItem = ({id})=> {
      setJobs(jobs.filter((item)=> item.id !== id))
    }


   

    // get index of draged item
    const onDragStart = (index) => setdragStartIndex(index)

    // update list when item dropped
    const onDrop = (dropIndex) => {
        // get draged item
        const dragItem = jobs[dragStartIndex]

        // delete draged item in list
        let list = [...jobs]
        list.splice(dragStartIndex, 1)

        // update list
        if (dragStartIndex < dropIndex) {
            setJobs([
                ...list.slice(0, dropIndex - 1),
                dragItem,
                ...list.slice(dropIndex - 1, list.length)
            ])
        } else {
            setJobs([
                ...list.slice(0, dropIndex),
                dragItem,
                ...list.slice(dropIndex, list.length)
            ])
        }
    }

  


  return (
    <ul className='list-jobs'>
            {jobs.map((item,index)=>(
             <ListJobItem
              key={item.id}
              index={index}
              onDragStart={(index) => onDragStart(index)}
              onDrop={(index) => onDrop(index)}
              >
              {
                  <>

                    <span onClick={()=>handleDeleteItem(item)}>
  
                         <FontAwesomeIcon className={"icon"} icon={faXmark} />
                    </span>
                      <span className='item-title'>{item.title}</span>
                  </>
              }
              </ListJobItem>
              ))}

   
      
    </ul>
  )
}

export default ListJobs