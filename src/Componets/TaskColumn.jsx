// src/components/TaskColumn.jsx
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';
export default function TaskColumn({ id,title, tasks, color }) {
  const {setNodeRef} = useDroppable({id:id})
  return (
    <div ref={setNodeRef} className="w-full md:w-1/3 p-2 bg-[#F5F5F5]">
      <h2 className={`text-lg font-bold mb-2 border-b-2 ${color} pb-1`}>{title}</h2>
     <div>
     {tasks.map(task => <TaskCard key={task.id} task={task} />)}
     </div>
    </div>
  );
}
