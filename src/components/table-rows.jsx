import { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const TableRows = ({activities, deleteActivity, onToggleCheck}) => {
  useEffect(()=>{

  }, [activities])
    return (
    <div className='w-full flex flex-col gap-3 items-center h-[70vh] overflow-y-scroll custom-scroll' >{
        activities.map((task, i)=>(<div className='flex justify-between items-center w-[90%]' key={i}>
              <div className={`w-[90%] flex justify-between bg-yellow-100 items-center rounded-xl p-4 transition-all duration-200 ${task.checked ? "shadow-in": "shadow-out"} `}>
                <div className="border w-4 h-4 bg-white text-start cursor-pointer relative " onClick={()=>onToggleCheck(task.name) }>
                  <div className={`absolute bottom-0 left-[-3px] text-yellow-700 transition-all duration-1000  ${task.checked ? "opacity-[1] scale-[1]": "opacity-[0] scale-[2]"}`}>
                    <DoneIcon />
                  </div>
                </div>
                <div className='uppercase font-bold w-[90%]'>
                    {task.name}
                </div>
              </div>
              <button type='button' className=' text-red-900 bg-red-200 p-4 rounded-xl transition-all duration-200 shadow-out active:shadow-in hover:shadow-hover' onClick={()=>{deleteActivity(task.name)}}><DeleteIcon /></button>
          </div>))
        }
    </div>
  )
}

export default TableRows