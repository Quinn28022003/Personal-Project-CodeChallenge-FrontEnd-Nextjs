import { useAppDispatch, useAppSelector } from '@/lib/store/hooks/hooks'
import { ICommonState } from '@/lib/store/slices/CommonSlice'
import { INavigationState, setShowNav } from '@/lib/store/slices/NavigationSlice'
import { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import { useCallback } from 'react'

const useNavigation = () => {
	const dispatch: ThunkDispatch<
		{
			common: ICommonState
			navigation: INavigationState
		},
		undefined,
		UnknownAction
	> &
		Dispatch<UnknownAction> = useAppDispatch()
	const showNav: boolean = useAppSelector(state => state.navigation.showNav)

	const handleChangeShowNav = useCallback(
		(showNav: boolean) => {
			dispatch(setShowNav(showNav))
		},
		[dispatch]
	)

	return {
		showNav,
		handleChangeShowNav
	}
}

export default useNavigation
