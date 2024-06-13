'use client'
import Cookies from 'js-cookie'
import { useTheme } from 'next-themes'

interface UseDarkModeReturnType {
	theme: string | undefined
	handleChangeTheme: () => void
}

const useDarkMode = (): UseDarkModeReturnType => {
	const { theme, setTheme } = useTheme()

	const handleChangeTheme = (): void => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
		Cookies.set('theme', theme === 'dark' ? 'light' : 'dark', {
			expires: 3650,
			secure: true
		})
	}

	return {
		theme,
		handleChangeTheme
	}
}

export default useDarkMode
