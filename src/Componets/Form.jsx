import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addTask } from '../redux/TodoSlice';
const Form = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [form, setform] = useState({
    name: "", description: "",
    value: "Todo",
  })
  console.log(form)
  function handelchange(e) {
    const { name, value } = e.target
    setform((prev)=>({
      ...prev,
      [name] :value
    }))
  
  }

  function SubmitHandeler(e) {
    console.log(e)
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: form.name,
      description: form.description,
      priority: "Low",
      comments: 0,
      files: 0,
    };

    dispatch(addTask({column:form.value,task:newTask}))
    navigate("/home")
  }
  return (
    <div>
      <form onSubmit={(e)=>SubmitHandeler(e)} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold mb-2">Add New Task</h2>

        {/* Name Field */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            onChange={(handelchange)}
            placeholder="Enter task name"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Description Field */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Enter task description"
            onChange={handelchange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
            required
          />
        </div>

        {/* Column Dropdown */}
        <div>
          <label className="block font-medium mb-1">Column</label>
          <select
            name="value"
            onChange={handelchange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="Todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
