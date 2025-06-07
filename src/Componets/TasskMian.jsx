import React from 'react'
import TaskColumn from './components/TaskColumn';

const TasskMian = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Mobile App</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <TaskColumn title="To Do" tasks={tasks.todo} color="border-purple-500" />
        <TaskColumn title="On Progress" tasks={tasks.inProgress} color="border-yellow-500" />
        <TaskColumn title="Done" tasks={tasks.done} color="border-green-500" />
      </div>
    </div>
    </div>
  )
}

export default TasskMian
