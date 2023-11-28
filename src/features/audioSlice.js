import { createSlice } from "@reduxjs/toolkit";
import { Audio } from "./Audio";

const initialState = {
    all : {
        sound : Audio,
        display: "",
        character : "" 
    }
}

export const audioSlice = createSlice ({
    name : "audio",
    initialState,
    reducers: {
        updateDisplay : (state, action) => {
            state.all.display = action.payload
        },
        setcharacter :(state, action) => {
            state.all.character = action.payload
        }
    }
})

export const {updateDisplay,setcharacter} = audioSlice.actions

export default audioSlice.reducer