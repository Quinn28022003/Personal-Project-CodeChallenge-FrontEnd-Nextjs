'use client'
import { BellOutlined } from '@ant-design/icons'
import { Badge, Button } from 'antd'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { userList } from '@/components/Header'
import getInitialTheme from '@/utils/getInitialTheme'
import styles from './styles.module.scss'

const BtnNotification = ({ initialData }: { initialData: userList }) => {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const { darkMode } = getInitialTheme()
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted && darkMode !== undefined) {
		return (
			<div className={`${styles.BtnNotification}`}>
				<Badge count={initialData.data.length} size="small">
					<Button ghost={darkMode === 'dark'} className={styles.btn} icon={<BellOutlined />} />
				</Badge>
			</div>
		)
	}

	return (
		<div className={`${styles.BtnNotification}`}>
			<Badge count={initialData.data.length} size="small">
				<Button
					ghost={theme === 'dark'}
					className={styles.btn}
					icon={<BellOutlined />}
					// onClick={handleChangeShowNotification}
				/>
			</Badge>
		</div>
	)
}

export default BtnNotification
