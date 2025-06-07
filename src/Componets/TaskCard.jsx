
export default function TaskCard({ task }) {
    return (
      <div className="bg-white rounded-xl shadow-md p-4 mb-4 ">
        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
          task.priority === "High" ? "bg-red-100 text-red-700" :
          task.priority === "Low" ? "bg-yellow-100 text-yellow-700" :
          "bg-green-100 text-green-700"
        }`}>
          {task.priority}
        </span>
        <h3 className="mt-2 text-md font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>
        <div className="flex justify-between text-xs text-gray-400 mt-4">
          <span>{task.comments} comments</span>
          <span>{task.files} files</span>
        </div>
      </div>
    );
  }
  