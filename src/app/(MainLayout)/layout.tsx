import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Subscription from '@/components/Subscription'

const MainLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => (
	<>
		<Header />
		<Navigation />
		{children}
		<Subscription />
		<Footer />
	</>
)

export default MainLayout
