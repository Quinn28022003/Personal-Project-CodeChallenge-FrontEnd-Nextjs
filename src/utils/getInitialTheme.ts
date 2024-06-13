import { MenuTheme } from 'antd'

interface IGetInitialThemeType {
	darkMode: MenuTheme | undefined
}

const getInitialTheme = (): IGetInitialThemeType => {
	let darkMode: MenuTheme | undefined

	if (typeof window === 'undefined') {
		const headers: any = require('next/headers')
		darkMode = headers.cookies().get('theme')?.value as MenuTheme
		return {
			darkMode
		}
	}
	return {
		darkMode: undefined
	}
}

export default getInitialTheme
