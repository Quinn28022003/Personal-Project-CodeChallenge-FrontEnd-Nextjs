import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'

import axios from '@/_Configs/AxiosConfig'

export interface ICommonState {
	innerWidth: number
	isLoggedIn: boolean
	userInfo: string
	loading: string
	error: string
}

const initialState: ICommonState = {
	innerWidth: 123,
	isLoggedIn: false,
	userInfo: '',
	loading: 'idle',
	error: ''
}

interface IResponseUserDetail {
	message: string
	data: string
}

interface RejectValue {
	message: string
}

export const fetchUserDetail = createAsyncThunk<string, string, { rejectValue: RejectValue }>(
	'common/fetchUserDetail',
	async (userId: string): Promise<string> => {
		const response: AxiosResponse<IResponseUserDetail> = await axios.get(`/users/${userId}`)
		return response.data.data
	}
)

const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		setUserInfo: (state: ICommonState, action: PayloadAction<string>) => {
			state.userInfo = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUserDetail.pending, (state: ICommonState) => {
				state.loading = 'pending'
			})
			.addCase(fetchUserDetail.fulfilled, (state: ICommonState, action: PayloadAction<string>) => {
				state.loading = 'success'
				state.userInfo = action.payload
			})
			.addCase(
				fetchUserDetail.rejected,
				(state: ICommonState, action: PayloadAction<{ message: string } | undefined>) => {
					state.loading = 'error'
					state.error = action.payload?.message || 'Failed to fetch user detail'
				}
			)
	}
})

export const { setUserInfo } = commonSlice.actions
export default commonSlice.reducer
