import { Provider as StoreProvider } from 'react-redux'

import store from '@/store'

interface IProviderProps {
	children: React.ReactNode
}

const Providers = ({ children }: IProviderProps) => <StoreProvider store={store}>{children}</StoreProvider>

export default Providers
