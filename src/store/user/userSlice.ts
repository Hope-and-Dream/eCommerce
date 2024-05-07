import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserSlice {
    email: string,
    password: string,
}

const initialState: UserSlice = {
    email: '',
    password: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      emailFill: (state, action: PayloadAction<string>) => {
          state.email = action.payload
      },
      passwordFill: (state, action: PayloadAction<string>) => {
          state.password = action.payload
      }
    },
})

export const { emailFill, passwordFill } = userSlice.actions

export default userSlice.reducer