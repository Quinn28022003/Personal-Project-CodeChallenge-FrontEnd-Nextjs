import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import { NextFont } from 'next/dist/compiled/@next/font'
import { Roboto } from 'next/font/google'

const inter: NextFont = Roboto({
	subsets: ['latin'],
	weight: ['500', '700'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Home page',
	description: `Challenge your coding skills with CodeMaster. Explore a variety of coding problems, improve your programming abilities, and join a community of passionate developers.`
}

const AppLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => (
	<html lang="en">
		<body className={inter.className}>
			<Providers>{children}</Providers>
		</body>
	</html>
)

export default AppLayout
