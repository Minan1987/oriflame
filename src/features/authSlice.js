import { createSlice } from "@reduxjs/toolkit";

//جلوگیری از خطای JSON.parse	(بررسی مقدار undefined)
let initialUser = null
try {
    const stored = localStorage.getItem("user")
    if (stored && stored !== "undefined") {
        initialUser = JSON.parse(stored)
    }
} catch (error) {
    console.error("خطا در خواندن localStorage:", error)
}

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