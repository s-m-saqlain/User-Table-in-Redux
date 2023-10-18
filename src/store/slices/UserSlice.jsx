import { createSlice } from "@reduxjs/toolkit";
import { clearAllusers } from "../actions";

const Users = createSlice({
  name: "user",
  initialState: {
    data:[],
    filter:[],
  },
  // initialState: [],
  reducers: {
    addUser(state, action) {
      state.data.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      // console.log("Hi" + action.payload)
      state.data.splice(action.payload, 1);
    },
    setFilter(state, action)  {
      state.filter = action.payload;
    },
    // clearAlluser(state,action) {
    //     return [];
    // },
  },
  // extraReducers(builder){
  //     builder.addCase(Users.actions.clearAlluser, () => {
  //         return [];
  //     })
  // }
  extraReducers(builder) {
    builder.addCase(clearAllusers, () => {
      return{
        data:[],
        filter:[]
      };
    });
  },
});
// console.log(Users.actions)

export default Users.reducer;
export const { addUser, removeUser, setFilter } = Users.actions;
