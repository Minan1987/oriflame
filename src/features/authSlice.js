import { createSlice } from "@reduxjs/toolkit";

//ذخیره سازی کاربر در localStorage
const initialUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: initialUser
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logOut: (state, action) => {
            state.user = null
            localStorage.removeItem('user')
        }
    }
})

export const { loginSuccess, logOut } = authSlice.actions

export default authSlice.reducer