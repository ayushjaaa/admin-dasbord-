// src/components/TaskColumn.jsx
import TaskCard from './TaskCard';

export default function TaskColumn({ title, tasks, color }) {
  return (
    <div className="w-full md:w-1/3 p-2 bg-[#F5F5F5]">
      <h2 className={`text-lg font-bold mb-2 border-b-2 ${color} pb-1`}>{title}</h2>
      {tasks.map(task => <TaskCard key={task.id} task={task} />)}
    </div>
  );
}
