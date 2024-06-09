'use client'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from '@/components/GlobalStyles'
import { AppStore, makeStore } from '@/lib/store/store'
import theme from '@/theme'
import { useRef } from 'react'
import { Provider } from 'react-redux'

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
			<ToastContainer draggable={false} autoClose={3000} position="top-left" />
			<GlobalStyles />
			<ConfigProvider theme={theme}>
				<AntdRegistry>{children}</AntdRegistry>
			</ConfigProvider>
		</Provider>
	)
}

export default Providers
