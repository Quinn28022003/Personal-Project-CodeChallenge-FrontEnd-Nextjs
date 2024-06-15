'use client'
import { Menu } from 'antd'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import BtnAuth from '@/components/Header/BtnAuth'
import SwitchComponent from '@/components/Switch'
import useNavigation from '@/hook/useNavigation'
import checkDevice from '@/utils/checkDevice'
import getInitialTheme from '@/utils/getInitialTheme'
import styles from './styles.module.scss'

interface IItems {
	key: string
	label: React.ReactNode
	path: string
}

const Navigation = () => {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const { showNav, handleChangeShowNav } = useNavigation()
	const { darkMode } = getInitialTheme()
	const pathname: string = usePathname()
	const initCheckDevice: string = checkDevice()
	const items: IItems[] = [
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

	const handleOnchangeMenu = (): void => {
		if (initCheckDevice === 'mobile' && showNav === true) {
			handleChangeShowNav(!showNav)
		}
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		const htmlElement: HTMLElement = document.documentElement
		if (showNav === true) {
			htmlElement.style.overflow = 'hidden'
		} else {
			htmlElement.style.overflow = 'auto'
		}
	}, [showNav])

	if (!mounted && darkMode !== undefined) {
		return (
			<div className={`${styles.Navigation} dark:bg-darkMode ${showNav === true ? 'fixed z-10' : ''}`}>
				{showNav === true ? (
					<div className="container">
						<div className={styles.container}>
							<SwitchComponent />
						</div>
						<BtnAuth />
					</div>
				) : null}
				<Menu
					className={`${styles.menu} dark:bg-darkMode`}
					theme={darkMode}
					selectedKeys={[pathname]}
					mode={`${showNav === false ? 'horizontal' : 'inline'}`}
					items={items}
					style={{
						height: `${showNav === true ? '100vh' : '100%'}`
					}}
				/>
			</div>
		)
	}

	return (
		<div className={`${styles.Navigation} dark:bg-darkMode ${showNav === true ? 'fixed z-10' : ''}`}>
			{showNav === true ? (
				<>
					<div className={styles.containerSwitch}>
						<SwitchComponent />
					</div>
					<BtnAuth />
				</>
			) : null}

			<Menu
				className={`${styles.menu} dark:bg-darkMode`}
				theme={theme === 'dark' ? 'dark' : 'light'}
				selectedKeys={[pathname]}
				mode={`${showNav === false ? 'horizontal' : 'inline'}`}
				items={items}
				style={{
					height: `${showNav === true ? '100vh' : '100%'}`
				}}
				onClick={handleOnchangeMenu}
			/>
		</div>
	)
}

export default Navigation
