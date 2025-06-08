import { createSlice } from "@reduxjs/toolkit";

const saveTasksToLocalStorage =(tasks)=>{
localStorage.setItem("tasks",JSON.stringify(tasks))
}
const loadTasksFromLocalStorage = ()=>{
    const saved = localStorage.getItem("tasks")
        if(saved){
            try{
                return JSON.parse(saved)
            }catch(e){
                console.error("Error parsing tasks from localStorage:", e);
            }
        }
        // default if nothing in localStorage
  return {
    Todo: [],
    inProgress: [],
    done: [],
  };
}
const initialState = {
    tasks:loadTasksFromLocalStorage()
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        setTasks(state,action){
            state.tasks = action.payload;
            saveTasksToLocalStorage(state.tasks)
        },
        addTask(state, action) {
            const { column, task } = action.payload;
            console.log(column,task)
            state.tasks[column].push(task);
            saveTasksToLocalStorage(state.tasks)

          },
          moveTask(state,action){
            const {TaskId,fromColumn,toColumn} = action.payload
            const taskIndex = state.tasks[fromColumn].findIndex((t)=>t.id === TaskId)
            if(taskIndex === -1) return

            const [task] = state.tasks[fromColumn].splice(taskIndex,1)
            task.status = toColumn;
            state.tasks[toColumn].push(task)
            saveTasksToLocalStorage(state.tasks);
          }

    }
})
export const { setTasks, addTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;