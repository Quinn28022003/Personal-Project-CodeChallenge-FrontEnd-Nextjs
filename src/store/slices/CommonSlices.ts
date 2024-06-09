import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICommonState {
	darkMode: boolean
	innerWidth: number
	isLoggedIn: boolean
	permission: string
	value: number
	userInfo: {
		id: number
		name: string
		email: string
	}
}

const initialState: ICommonState = {
	darkMode: false,
	value: 0,
	innerWidth: 0,
	isLoggedIn: false,
	permission: '',
	userInfo: {
		id: 0,
		name: '',
		email: ''
	}
}

const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		}
	},
	extraReducers: () => {}
})

export const { increment, decrement, incrementByAmount } = commonSlice.actions
export default commonSlice.reducer
