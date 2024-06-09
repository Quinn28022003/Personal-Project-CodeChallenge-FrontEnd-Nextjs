import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICommonState {
	value: number
	name: string
}

const initialState: ICommonState = {
	value: 2,
	name: 'quan'
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
	}
})

export const { increment, decrement, incrementByAmount } = commonSlice.actions
export default commonSlice.reducer
