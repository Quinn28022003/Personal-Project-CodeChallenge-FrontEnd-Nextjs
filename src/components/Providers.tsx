'use client'
import '@/styles/globals.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import Cookies from 'js-cookie'
import 'react-toastify/dist/ReactToastify.css'

import { ICommonState } from '@/lib/store/slices/CommonSlice'
import { INavigationState } from '@/lib/store/slices/NavigationSlice'
import { AppStore, makeStore } from '@/lib/store/store'
import themeAntDesign from '@/theme'
import { EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction } from '@reduxjs/toolkit'
import { ThemeProvider, useTheme } from 'next-themes'
import { MutableRefObject, useRef } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

interface IProviderProps {
	children: React.ReactNode
}

const Providers = ({ children }: IProviderProps): React.ReactNode => {
	const { theme } = useTheme()
	if (!Cookies.get('theme')) {
		Cookies.set('theme', theme ?? 'light', {
			expires: 3650,
			secure: true
		})
	}

	const storeRef: MutableRefObject<
		| EnhancedStore<
				{ common: ICommonState; navigation: INavigationState },
				UnknownAction,
				Tuple<
					[
						StoreEnhancer<{
							dispatch: ThunkDispatch<{ common: ICommonState; navigation: INavigationState }, undefined, UnknownAction>
						}>,
						StoreEnhancer
					]
				>
		  >
		| undefined
	> = useRef<AppStore>()
	if (!storeRef.current) {
		storeRef.current = makeStore()
	}

	return (
		<Provider store={storeRef.current}>
			<ThemeProvider attribute="class" enableSystem defaultTheme="system">
				<ToastContainer draggable={false} autoClose={3000} position="top-left" />
				<ConfigProvider theme={themeAntDesign}>
					<AntdRegistry>{children}</AntdRegistry>
				</ConfigProvider>
			</ThemeProvider>
		</Provider>
	)
}

export default Providers
