'use client'
import '@/styles/globals.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import Cookies from 'js-cookie'
import 'react-toastify/dist/ReactToastify.css'

import { AppStore, makeStore } from '@/lib/store/store'
import themeAntDesign from '@/theme'
import { ThemeProvider, useTheme } from 'next-themes'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

interface IProviderProps {
	children: React.ReactNode
}

const Providers = ({ children }: IProviderProps) => {
	const { theme } = useTheme()

	// Check if theme cookie is set, and set it if not
	if (!Cookies.get('theme')) {
		Cookies.set('theme', theme ?? 'light', {
			expires: 3650,
			secure: true
		})
	}

	const storeRef = useRef<AppStore>()
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
