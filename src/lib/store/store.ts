import CommonReducer from '@/lib/store/slices/CommonSlice'
import navigationReducer from '@/lib/store/slices/NavigationSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

export const makeStore = () =>
	configureStore({
		reducer: combineReducers({
			common: CommonReducer,
			navigation: navigationReducer
		})
	})

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
