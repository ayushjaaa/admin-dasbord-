import React from 'react'
import TaskColumn from '../Componets/TaskColumn';
// import { tasks } from '../data/tasks';
import { FaPen, FaFilter, FaCalendarAlt, FaLink, FaUserPlus, FaShareAlt } from "react-icons/fa";
import { HiViewGrid, HiOutlineViewList } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {DndContext} from "@dnd-kit/core"
import { useDispatch } from 'react-redux';
import { moveTask } from '../redux/TodoSlice';
const Home = () => {
  const tasks = useSelector((state)=>state.tasks.tasks)


  tasks.Todo.map((elem)=>console.log(elem.id))
const dispatch = useDispatch()
  function findColumnofTask(TaskId,tasks){
    for(const column in tasks){
   
      if(tasks[column].some(task=>String(task.id) === String(TaskId))){
        return column;

      }
    }
    return null
  }


  function handelDragEnd(event) {
    const {active,over} = event
    if(!over) return

    const TaskId = active.id
    console.log(TaskId)

    const toColumn = over.id
    console.log(toColumn)

   
    const fromColumn = findColumnofTask(TaskId,tasks)
    console.log(fromColumn)

      dispatch(moveTask({TaskId,fromColumn,toColumn}))
    
  }
  const a =  localStorage.getItem("tata")
    console.log(a)


  console.log(tasks)
   const navigate  = useNavigate()
  return (
    <div className='w-400px h-screen '>
  <div>
      <div className="min-h-screen  w-6xl bg-[#FFFFFF] p-6">
      <div className="flex flex-col w-10rem md:flex-row md:justify-between items-start md:items-center p-4 gap-4 bg-white">
      
      {/* Left Section */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-gray-900">Mobile App</h1>
          <div className="flex gap-1">
            <button className="bg-purple-100 text-purple-600 p-1 rounded"  onClick={()=>navigate('/form')}>
              <FaPen />
            </button>
            <button className="bg-purple-100 text-purple-600 p-1 rounded">
              <FaLink className="rotate-45" />
            </button>
          </div>
        </div>

        {/* Filter + Today */}
        <div className="flex gap-2">
          <button className="flex items-center gap-1 border rounded px-3 py-1 text-sm text-gray-700">
            <FaFilter /> Filter
          </button>
          <button className="flex items-center gap-1 border rounded px-3 py-1 text-sm text-gray-700">
            <FaCalendarAlt /> Today
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center text-sm text-purple-600 font-medium">
            <span className="bg-purple-100 rounded-full px-2 py-0.5 text-lg">+</span> Invite
          </button>

          {/* Avatars */}
          <div className="flex items-center -space-x-2 ml-2">
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/68.jpg" alt="user" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/72.jpg" alt="user" />
            <div className="w-8 h-8 flex items-center justify-center bg-pink-100 text-pink-600 text-sm rounded-full border-2 border-white">+2</div>
          </div>
        </div>

        {/* Share + Layout Buttons */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 border px-3 py-1 text-sm rounded">
            <FaShareAlt /> Share
          </button>
          <div className="border-l h-6" />
          <div className="flex gap-1">
            <button className="bg-purple-600 text-white p-1.5 rounded">
              <HiOutlineViewList />
            </button>
            <button className="p-1.5 text-gray-500 rounded hover:bg-gray-100">
              <HiViewGrid />
            </button>
          </div>
        </div>
      </div>
    </div>
      <div className="flex flex-col md:flex-row gap-4">
        <DndContext onDragEnd={handelDragEnd}>
        <TaskColumn id={"Todo"} className="bg-amber-600" title="To Do" tasks={tasks.Todo} color="border-purple-500"/>
        <TaskColumn id={"inProgress"} title="On Progress" tasks={tasks.inProgress} color="border-yellow-500" />
        <TaskColumn id={"done"} title="Done" tasks={tasks.done} color="border-green-500" />
        </DndContext>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Home
