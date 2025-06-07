import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tasks:{
        Todo:[],
        inProgress:[],
        done:[]
    }
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        setTasks(state,action){
            state.tasks = action.payload;
        },
        addTask(state, action) {
            const { column, task } = action.payload;
            console.log(column,task)
            state.tasks[column].push(task);
          },
          moveTask(state,action){
            const {TaskId,fromColumn,toColumn} = action.payload
            const taskIndex = state.tasks[fromColumn].findIndex((t)=>t.id === TaskId)
            if(taskIndex === -1) return

            const [task] = state.tasks[fromColumn].splice(taskIndex,1)
            task.status = toColumn;
            state.tasks[toColumn].push(task)
          }

    }
})
export const { setTasks, addTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;