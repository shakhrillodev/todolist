import { useEffect, useState } from "react"
import TableRows from "./table-rows"

const Table = () => {
    const [activities, setActivities] = useState([])
    const [value, setValue] = useState('')
    let [Done, setDone] = useState(0)
    useEffect(()=>{
    }, [activities])

    const onAddActivity = (e)=>{
        e.preventDefault()
        if(value!==''){
            setActivities([{name: value, checked: false}, ...activities])
            setValue('')
        }
    }   

    const deleteActivity = (name)=>{
        setActivities(activities.filter(item => {
            if(item.name === name && item.checked){
                setDone(Done-1)
            }    
            return item.name !== name
        }))
    }   

    const onToggleCheck = (name)=>{
        setActivities(activities.map(item =>{
            if (item.name === name) {
                if(item.checked===false){
                    setDone(Done+1)
                }
                else{
                    setDone(Done-1)
                }
                return {...item, checked: !item.checked}
            }
            return item
        }))
    }
    console.log((Done/activities.length).toFixed(2)*100);
    return (
        <div className="w-[50%] pt-[5vh] flex flex-col justify-around h-[100vh] overflow-hidden">
            <form className="flex">
                <input type="text" className="bg-blue-50 w-full outline-none mb-7 rounded-[20px] h-12 p-4 transition-all duration-200 shadow-out focus:shadow-in" value={value} onChange={(e)=>{setValue(e.target.value)}} />
                <button type="submit" className="ml-3 bg-blue-400 rounded-[10px] h-fit p-3 transition-all duration-200 shadow-out hover:shadow-hover active:shadow-in" onClick={onAddActivity} onSubmit={onAddActivity}>ADD</button>
            </form>
            <TableRows onToggleCheck={onToggleCheck} activities={activities} deleteActivity={deleteActivity} />
            <div className="h-[5vh] w-full border border-black bg-white rounded-lg relative overflow-hidden">
                <div className={`transition-all duration-500 left-0 top-0 absolute h-[5vh] bg-yellow-400 text-center`} style={{ width: `${(Done/activities.length).toFixed(2)*100}%`}}>
                    <p className="absolute inline"><b>{Done}/{activities.length}</b></p>
                </div>    
            </div>
        </div>
    )
}

export default Table