'use client'
import { Button } from 'antd'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import getInitialTheme from '@/utils/getInitialTheme'
import Link from 'next/link'
import styles from './styles.module.scss'

const BtnAuth = () => {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const { darkMode } = getInitialTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted && darkMode !== undefined) {
		return (
			<div className={`${styles.BtnAuth}`}>
				<Link href={'/register'}>
					<Button ghost={darkMode === 'dark'} className={styles.btn}>
						Đăng ký
					</Button>
				</Link>
				<div className={styles.line} />
				<Link href={'/login'}>
					<Button ghost={darkMode === 'dark'} className={styles.btn}>
						Đăng nhập
					</Button>
				</Link>
			</div>
		)
	}

	return (
		<div className={`${styles.BtnAuth}`}>
			<Link href={'/register'}>
				<Button ghost={theme === 'dark'} className={styles.btn}>
					Đăng ký
				</Button>
			</Link>
			<div className={styles.line} />
			<Link href={'/login'}>
				<Button ghost={theme === 'dark'} className={styles.btn}>
					Đăng nhập
				</Button>
			</Link>
		</div>
	)
}

export default BtnAuth
