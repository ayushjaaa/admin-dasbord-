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

    }
})
export const { setTasks, addTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;