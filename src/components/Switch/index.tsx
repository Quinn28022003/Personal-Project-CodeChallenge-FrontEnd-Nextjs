'use client'
import useDarkMode from '@/hook/useDarkMode'
import { Switch } from 'antd'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import getInitialTheme from '@/utils/getInitialTheme'

const SwitchComponent = () => {
	const { theme, handleChangeTheme } = useDarkMode()
	const [mounted, setMounted] = useState(false)
	const { darkMode } = getInitialTheme()

	const onChange = () => {
		handleChangeTheme()
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted && darkMode !== undefined) {
		return (
			<div className={styles.SwitchComponent}>
				<Switch checked={darkMode !== 'light'} size="small" />
			</div>
		)
	}
	return (
		<div className={styles.SwitchComponent}>
			<Switch checked={theme === 'dark'} size="small" onChange={onChange} />
		</div>
	)
}

export default SwitchComponent
