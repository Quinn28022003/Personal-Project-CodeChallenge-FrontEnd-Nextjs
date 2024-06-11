import Header from '@/components/Header'
import Navigation from '@/components/Navigation'

const SubLayouts = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => (
	<>
		<Header />
		<Navigation />
		{children}
	</>
)

export default SubLayouts
