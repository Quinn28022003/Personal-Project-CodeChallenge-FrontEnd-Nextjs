'use client'
import { MenuOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import useNavigation from '@/hook/useNavigation'
import getInitialTheme from '@/utils/getInitialTheme'
import styles from './styles.module.scss'

const BtnMenu = () => {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const { darkMode } = getInitialTheme()
	const { showNav, handleChangeShowNav } = useNavigation()

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleNavigation = () => {
		handleChangeShowNav(!showNav)
	}

	if (!mounted && darkMode !== undefined) {
		return (
			<div className={`${styles.BtnMenu}`}>
				<Button ghost={darkMode === 'dark'} className={styles.btn} icon={<MenuOutlined />} />
			</div>
		)
	}

	return (
		<div className={`${styles.BtnMenu}`}>
			<Button
				ghost={theme === 'dark'}
				className={styles.btn}
				icon={<MenuOutlined />}
				onClick={() => handleNavigation()}
			/>
		</div>
	)
}

export default BtnMenu
