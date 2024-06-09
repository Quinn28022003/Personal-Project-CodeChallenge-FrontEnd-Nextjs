import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['latin']
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
		<body className={inter.className}>{children}</body>
	</html>
)

export default AppLayout
