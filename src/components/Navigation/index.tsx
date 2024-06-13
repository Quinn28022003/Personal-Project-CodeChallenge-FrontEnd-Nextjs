'use client'
import { Menu } from 'antd'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import getCurrentPath from '@/utils/getCurrentPath'
import getInitialTheme from '@/utils/getInitialTheme'
import styles from './styles.module.scss'

const Navigation = () => {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const { darkMode } = getInitialTheme()
	const { currentPath } = getCurrentPath()
	const pathname = usePathname()

	const items = [
		{
			key: '/',
			label: <Link href="/">Trang chủ</Link>,
			path: '/'
		},
		{
			key: '/reviewer',
			label: <Link href="/reviewer">Reviewer</Link>,
			path: '/reviewer'
		},
		{
			key: '/challenge',
			label: <Link href="/challenge">Thử thách</Link>,
			path: '/challenge'
		},
		{
			key: '/chat',
			label: <Link href="/chat">Trò chuyện</Link>,
			path: '/chat'
		},
		{
			key: '/see-request',
			label: <Link href="/see-request">Xem yêu cầu</Link>,
			path: '/see-request'
		}
	]

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted && darkMode !== undefined) {
		return (
			<div className={`${styles.Navigation}`}>
				<div className={styles.container} />
				<Menu
					className={`${styles.menu} dark:bg-darkMode`}
					theme={darkMode}
					selectedKeys={[currentPath ?? '']}
					// mode={`${showNav === false ? 'horizontal' : 'inline'}`}
					mode={'horizontal'}
					items={items}
				/>
			</div>
		)
	}

	return (
		<div className={`${styles.Navigation}`}>
			<div className={styles.container} />
			<Menu
				className={`${styles.menu} dark:bg-darkMode`}
				theme={theme === 'dark' ? 'dark' : 'light'}
				selectedKeys={[pathname]}
				// mode={`${showNav === false ? 'horizontal' : 'inline'}`}
				mode={'horizontal'}
				items={items}
			/>
		</div>
	)
}

export default Navigation
