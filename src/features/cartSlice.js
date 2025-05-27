import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setTotalCount: (state, action) => {
            state.totalCount = action.payload;
        }
    }
})

export const { setTotalCount } = cartSlice.actions

export default cartSlice.reducer