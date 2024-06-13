'use client'
import { SearchOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import getInitialTheme from '@/utils/getInitialTheme'
import styles from './styles.module.scss'

const BtnSearch = () => {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const { darkMode } = getInitialTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted && darkMode !== undefined) {
		return (
			<div className={`${styles.BtnSearch}`}>
				<Button ghost={darkMode === 'dark'} className={styles.btn} icon={<SearchOutlined />} />
			</div>
		)
	}

	return (
		<div className={`${styles.BtnSearch}`}>
			<Button ghost={theme === 'dark'} className={styles.btn} icon={<SearchOutlined />} onClick={() => {}} />
		</div>
	)
}

export default BtnSearch
