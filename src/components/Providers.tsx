'use client'
import '@/styles/globals.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import 'react-toastify/dist/ReactToastify.css'

import { AppStore, makeStore } from '@/lib/store/store'
import theme from '@/theme'
import { ThemeProvider } from 'next-themes'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

interface IProviderProps {
	children: React.ReactNode
}

const Providers = ({ children }: IProviderProps) => {
	const storeRef = useRef<AppStore>()
	if (!storeRef.current) {
		storeRef.current = makeStore()
	}
	return (
		<Provider store={storeRef.current}>
			<ThemeProvider attribute="class" enableSystem defaultTheme="system">
				<ToastContainer draggable={false} autoClose={3000} position="top-left" />
				<ConfigProvider theme={theme}>
					<AntdRegistry>{children}</AntdRegistry>
				</ConfigProvider>
			</ThemeProvider>
		</Provider>
	)
}

export default Providers
