import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface INavigationState {
	showNav: boolean
}

const initialState: INavigationState = {
	showNav: false
}

const NavigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setShowNav: (state: INavigationState, action: PayloadAction<boolean>) => ({
			...state,
			showNav: action.payload
		})
	}
})

export const { setShowNav } = NavigationSlice.actions
export default NavigationSlice.reducer
